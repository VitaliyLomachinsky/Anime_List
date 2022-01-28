import List_item from "./list_item";

const List = (props) => {
  let anime_list = props.Anime_list_data.map((i) => (
    <List_item id={i.id} title={i.title} point={i.point} />
  ));

  return <div className="list">{anime_list}</div>;
};

export default List;
