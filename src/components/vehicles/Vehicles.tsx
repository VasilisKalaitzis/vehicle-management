import ItemTile from "../common/ItemTile";

const Vehicles = () => {
  const onClick = (id: string) => {};
  return (
    <ItemTile
      onClick={onClick}
      id="0"
      label="vehicle 1"
      image={require("./defaultImage.jpg")}
    />
  );
};

export default Vehicles;
