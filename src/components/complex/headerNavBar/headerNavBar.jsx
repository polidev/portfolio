import BaseNavBarItem from "../../base/baseNavBarItem/baseNavBarItem";
import "/src/components/complex/header/header.css";

function HeaderNavBar() {
  const listOfLinks = ["Home", "Projects", "Services", "Contact"];

  return (
    <>
      <nav className="flex">
        <ul className="text-xl flex items-end gap-0.5">
          {listOfLinks.map((item) => (
            <BaseNavBarItem key={item} listOfItems={item} />
          ))}
        </ul>
      </nav>
    </>
  );
}

export default HeaderNavBar;
