import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // destructure the state to {user}, pull the user to this component from data layer to use the information needed
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      {/* If there is no user, render the login page */}
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />
          <div className="app_body">
            {/* Sidebar  */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
