import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  // useStateValue to dispatch
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    // Google Sign In
    // signInWithPopup - gonna show a pop up when user click on button
    // once get the result, dispatch the type to what we defined in actiontypes in reducer.js
    // passing the user as whatever we got back from response
    // if there is any error, alert the error message on screen
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // pushes that into the data layer, at this step we have user in data layer. we are able to use the user in any components
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019*29.svg.png"
          alt=""
        ></img>
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        ></img>
      </div>
      <Button className="button" type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
/*
    Process ongoing once login: 
    Once Login, push the user into DATA layer
    once the user's data is inside the DATA layer,
    we can access them in any components.
    State provider - assume is the data layer 
    1. Create State Provider 
    2. Create reducer
    3. Go to index.js, wrap the <App/> with <StateProvider/>
    4. Go to Login.js, done the dispatch type and user
*/

/*
    Database building:
    go to firebase website > firebase database > start a collection(kind of like an array of objects) > Enter value into Collection ID
    select auto ID for Document ID > Enter value for Field, Type & Value 
*/
