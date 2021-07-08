import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
// pull in the firebase database
import db from "./firebase";

function Feed() {
  // create some memory for tracking the post
  const [posts, setPosts] = useState([]);

  // accessing firebase database collection "post"
  // onSnapshot mean when any changes happened within the database, it will give us the real time snapshot(dont have to refresh to get it)
  // it's a realtime connection to the firebase database, and maps to state created
  // when get the snapshot, update the post to whatever the snapshot is(get an array of docs within 'posts' collection)
  // then for the docs, map through every single one, for each docs return a custom object(id & data)
  // [] at the end mean only the code once when the feed component load
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />

      {/* Message Sender */}
      <MessageSender />

      {/* Post */}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
