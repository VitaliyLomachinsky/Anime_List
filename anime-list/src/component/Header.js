const Header = (props) => {
  let add_btn_click = () => {
    var myName = prompt("Title", "");
    var myAge = prompt("Point:", "");
    window.confirm(myName + " " + myAge + "/10");
    props.AddAnime(myName, myAge);
  };

  return (
    <div className="Header">
      <div className="Title_div">
        <h1 className="title">My anime List </h1>
      </div>
      <div className="btn_div">
        <button className="add_btn" onClick={add_btn_click}>
          ADD
        </button>
      </div>
      <div className="menu"></div>
    </div>
  );
};

export default Header;
