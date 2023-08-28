import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <NavLink to="/">Logo</NavLink>
      <ul>
        <NavLink to="/fun-comp">Functional Components</NavLink>
        <NavLink to="/typing-events">Typing of Events</NavLink>
      </ul>
    </div>
  );
}
