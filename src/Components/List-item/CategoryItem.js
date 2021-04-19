import salonStore from "../../store/salonStore";

const CategoryItem = ({ category }) => {
  return (
    <div>
      <p>{category.name}</p>
      <button onClick={() => salonStore.removeCategory(category.id)}>
        {" "}
        Remove Category{" "}
      </button>
    </div>
  );
};
export default CategoryItem;
