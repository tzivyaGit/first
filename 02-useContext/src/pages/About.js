import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export function About() {
  // שלב 3
    //גישה לערך הנוכחי בקונטסט,
  //user-והצבתו לתוך משתנה מקומי בקומפוננטה
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>About</h2>
      {/* הצגת ערך המשתנה השמור בקונטסט */}
      {user && <p>Current user: {user}</p>}
    </div>
  );
}
