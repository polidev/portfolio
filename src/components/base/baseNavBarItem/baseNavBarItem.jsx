import { Link } from "react-router";
import "/src/components/complex/header/header.css";

function BaseNavBarItem({ listOfItems }) {
  return (
    <li className="p-2 bg-beige text-avocado rounded-tl-xl rounded-tr-xl">
      {
        <Link
          to={`/${listOfItems === "Home" ? "" : listOfItems.toLowerCase()}`}
        >
          {listOfItems}
        </Link>
      }
    </li>
  );
}

export default BaseNavBarItem;
