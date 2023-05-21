import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export function GrandChildComp(props) {
  //גישה לערך הנוכחי בקונטסט,
  //user-והצבתו לתוך משתנה מקומי בקומפוננטה
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>-----&gt;  Grand Child Component</h2>
      {user && <p>-----&gt;  Logged in user: {user} from the second level!</p>}
    </div>
  );
}
