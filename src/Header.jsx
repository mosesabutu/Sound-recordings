import { Outlet, NavLink } from "react-router";

export default function Header() {
  return (
    <div>
      <div className="m-3 p-3 flex  items-center justify-between">
        <NavLink to="/"> Without Query</NavLink>
        <NavLink to="withQuery">With Query </NavLink>
        <NavLink to={"infiniteScrollWithQuery"}>Infinite Scroll</NavLink>
        <NavLink to={"Tasks"}>Tasks</NavLink>
        <NavLink to={"drag-and-drop-tutorial"}>Drag and drop</NavLink>
        <NavLink to={"zustand"}>Zustand</NavLink>
        <NavLink to={"classComponent"}>Class</NavLink>
        <NavLink to={"demofunc"}>DemoFunc</NavLink>
      </div>
      <main>
        <Outlet />
      </main>

    </div>
  );
}
