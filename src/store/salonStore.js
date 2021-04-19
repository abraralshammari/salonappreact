import { action, makeObservable, observable } from "mobx";
// import axios from "axios";
import category from "../category";

class SalonStore {
  category = category;

  //   fetchCategory = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000");
  //       this.instructorInfo = response.data;
  //     } catch (error) {
  //       console.error("fetchCategory  -> response", error);
  //     }
  //   };

  addCategory = (data) => {
    let newCategory = data;
    newCategory.id = this.category.length + 1;
    console.log(newCategory);
    this.category.push(newCategory);
    console.log(this.category);
  };

  removeCategory = (categoryId) => {
    this.category = this.category.filter((cat) => cat.id !== categoryId);
  };

  constructor() {
    makeObservable(this, {
      category: observable,

      // fetchCategory: action,

      addCategory: action,

      removeCategory: action,
    });
  }
}

const salonStore = new SalonStore();

export default salonStore;
