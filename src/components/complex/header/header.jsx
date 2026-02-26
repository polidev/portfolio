import HeaderNavBar from "../headerNavBar/headerNavBar";
import "/src/components/complex/header/header.css";

function Header() {
  return (
    <header className="flex col-start-1 col-end-16 row-span-2 bg-avocado justify-around text-beige">
      <h1>Header</h1>
      <HeaderNavBar />
    </header>
  );
}

export default Header;
