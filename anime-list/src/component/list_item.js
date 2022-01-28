const List_item = (props) => {
  return (
    <div className="list_item_div">
      <div className="id">{props.id}</div>
      <div className="list_title">{props.title}</div>
      <div className="point">{props.point}/10</div>
    </div>
  );
};

export default List_item;
