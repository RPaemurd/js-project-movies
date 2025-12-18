import { Link, NavLink } from "react-router-dom";

export const NavTest = () => {
  return (
    <nav>
      <h1>Heading</h1>
      <ul>
        <li>
          <NavLink to="/about">Home</NavLink>
        </li>
        {/*  when we use Routes, we can't use regular links, we need to use the ones that react router gives us */}
        <li>About</li>
        <li>Contact</li>
      </ul>
      ~~
    </nav>
  );
};
