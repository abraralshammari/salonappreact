import { action, makeObservable, observable } from "mobx";
// import axios from "axios";
import user from "../user";
import category from "../category";


class SalonStore {
  user = user;
  category = category;

  //   fetchUser = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000");
  //       this.user = response.data;
  //     } catch (error) {
  //       console.error("fetchUser  -> response", error);
  //     }
  //   };




//   fetchCategory = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000");
  //       this.category = response.data;
  //     } catch (error) {
  //       console.error("fetchCategory  -> response", error);
  //     }
  //   };


  addUser = (data) => {
    let newUser = data;
    newUser.id = this.user.length + 1;
    console.log(newUser);
    this.user.push(newUser);
    console.log(this.user);
  };

  removeUser = (userId) => {
    this.user = this.user.filter((us) => us.id !== userId);
  
    addCategory = (data) => {
    let newCategory = data;
    newCategory.id = this.category.length + 1;
    console.log(newCategory);
    this.category.push(newCategory);
    console.log(this.category);
  };

  removeCategory = (categoryId) => {
    this.category = this.category.filter((cat) => cat.id !== categoryId);

  constructor() {
    makeObservable(this, {
      user: observable,
      category: observable,

      // fetchUser: action,
      // fetchCategory: action,

      addUser: action,
      addCategory: action,

      removeUser: action,
      removeCategory: action,

    });
  }
}

const salonStore = new SalonStore();

// salonStore.fetchCategory();

// salonStore.fetchUser();


export default salonStore;
