import { Link } from "react-router";
import HeaderNavBar from "../headerNavBar/headerNavBar";
import "/src/components/complex/header/header.css";

function Header() {
  return (
    <header className="flex col-start-1 col-end-16 row-span-1 bg-avocado50 justify-evenly text-beige">
      <Link to={"/"} className="flex items-center">
        <img src="/public/home.svg" alt="" className="w-12" />
      </Link>
      <HeaderNavBar />
    </header>
  );
}

export default Header;
