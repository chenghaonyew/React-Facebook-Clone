import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />

      {/* Message Sender */}
      <MessageSender />

      {/* Post */}
      <Post
        profilePic="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        message="I am an Elephant like the bridge!"
        timestamp="TIMESTAMP"
        username="Elephant"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
      />
      <Post
        profilePic="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
        message="I am Black Blue like the mountain"
        timestamp="TIMESTAMP BB"
        username="Black Blue"
      />
    </div>
  );
}

export default Feed;
