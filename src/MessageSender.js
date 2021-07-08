import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
  // Create initial input with empty value
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // destructure the state to {user}, pull the user to this component from data layer to use the information needed
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    // Dont want the website refresh when submit
    e.preventDefault();

    // Add uesr new post into firebase database
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      image: imageUrl,
      username: user.displayName,
    });

    // Reset the textbox
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          {/* 
                Map the value of 'input tag' to variable 'input' 
                onChange - set the variable 'input' to what user typed once user start type
          */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input"
            placeholder={`What's on your mind? ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          {/* When click 'ENTER' on keyboard, it submit the form & trigger 'handleSubmit' function */}
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
