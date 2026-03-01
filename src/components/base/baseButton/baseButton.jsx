import "/src/components/base/baseButton/baseButton.css";

const handleClick = () => {
  console.log("click");
};

function BaseButton({ text }) {
  return (
    <>
      <button
        onClick={handleClick}
        className="p-4 bg-sand hover:scale-105 active:scale-95"
      >
        {text}
      </button>
    </>
  );
}

export default BaseButton;
