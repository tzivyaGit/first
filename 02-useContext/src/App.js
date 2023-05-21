import React, { useState } from "react";
import { HashRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UserContext } from "./utils/UserContext";

function App() {
  //הגדרת משתנה שיכיל נתונים
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {/* שלב 2 */}
        {/* הגדרת הקומפוננטות שיכירו את הקונטסט באופן ישיר
        ושליחת מבנה הקונטסט אליהם */}

        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </UserContext.Provider>

      </div>
    </BrowserRouter>
  );
}

export default App;
