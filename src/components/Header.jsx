import { Link, NavLink } from "react-router-dom";
import ReactLogo from "../assets/react.svg";

export const Header = () => {
  return (
    <header>
      <nav className="flex justify-between p-3 shadow-lg  ">
        <div className="flex gap-1">
        <Link to="/">
        <img src={ReactLogo} alt="logo" />
        </Link>
        <label className="font-bold text-2xl">Ecommerce</label>
        </div>
        <div className="flex gap-4">
        <NavLink to="/" end>
        <button className="hover:bg-gray-100 p-2 hover:rounded-lg hover:shadow-lg font-bold">Home</button>
        </NavLink>
        <NavLink to={"/cart"}>
        <button className="hover:bg-gray-100 px-3 py-2 hover:rounded-lg hover:shadow-lg font-bold">Cart</button>
        </NavLink>
        </div>
        <NavLink to={"/cart"}>
        <span className="mr-5 hover:bg-gray-100 px-3 py-2 hover:rounded-lg hover:shadow-lg font-bold">Cart:2</span>
        </NavLink>
      </nav>
    </header>
  );
};
