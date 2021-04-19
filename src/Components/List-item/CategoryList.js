import { observer } from "mobx-react";
import salonStore from "../../store/salonStore";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categoryList = salonStore.category.map((cat) => (
    <CategoryItem category={cat} key={cat.id} />
  ));
  return <>{categoryList}</>;
};
export default observer(CategoryList);
