import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { GrandChildComp } from "./GrandChildComp";

export function ChildComp(props) {
    //גישה לערך הנוכחי בקונטסט,
  //user-והצבתו לתוך משתנה מקומי בקומפוננטה
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>-&gt;Child Component</h2>
      {user && <p>-&gt;Logged in user: {user} from the first level</p>}
      <GrandChildComp />
    </div>
  );
}
