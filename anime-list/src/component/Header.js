import { useState } from "react";


const Header = (props) => {
  let btn_status = true;

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="Header">
      <div className="Title_div">
        <h1 className="title">My anime List </h1>
      </div>
      <div className="btn_div">
        <button className="add_btn" onClick={toggleClass}>
          ADD
        </button>
      </div>
      <div className={isActive ? "menu" : "menu menu_invisible"}>
        
      </div>
    </div>
  );
};

export default Header;
