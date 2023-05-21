import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { ChildComp } from "../components/ChildComp";

export function Home() {

  // גישה כפולה לקונטסט :
  //1---לערך המשתנה-user 
  //2---לפונקצית העריכה של הקונטסט-setUser
  // והצבתם לתוך משתנים מקומיים בקומפוננטה
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      {user && <p>Logged in user: {user} from Home</p>}
      <ChildComp />

      {user ? (
        // עריכת הקונטסט
        <button onClick={async () => { setUser("") }}>logout</button>
      ) : (
        // עריכת הקונטסט
        <button onClick={async () => { setUser('Alper') }}>login</button>
      )}
    </div>
  );
}
