import { Link } from "react-router";
import BaseButton from "../components/base/baseButton/baseButton";
import "/src/pages/home.css";

function Home() {
  return (
    <>
      <div className="col-start-2 col-end-15 row-span-11 flex justify-between">
        <section className="flex flex-col w-[50%] justify-around">
          <h4 className="w-fit p-2 text-2xl text-abocado font-bold bg-olive">
            Hi! I'm Jesus Politron
          </h4>
          <h2 className="text-8xl font-bold">React developer</h2>
          <p className="font-mono font-light">
            I'm a React developer with a passion for creating user-friendly and
            visually appealing web applications. Build dynamic and interactive
            interfaces that enhance user experience.
          </p>
          <span className="flex gap-4">
            <Link
              to="https://www.linkedin.com/in/jesus-politron/"
              target="_blank"
            >
              <BaseButton text="LinkedIn" />
            </Link>
            <BaseButton text="Download CV" />
          </span>
        </section>
        <section>photo</section>
      </div>
    </>
  );
}

export default Home;
