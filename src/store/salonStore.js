import { action, makeObservable, observable } from "mobx";
// import axios from "axios";
import user from "../user";

class SalonStore {
  user = user;

  //   fetchUser = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000");
  //       this.user = response.data;
  //     } catch (error) {
  //       console.error("fetchUser  -> response", error);
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
  };

  constructor() {
    makeObservable(this, {
      user: observable,

      // fetchUser: action,

      addUser: action,

      removeUser: action,
    });
  }
}

const salonStore = new SalonStore();

// salonStore.fetchUser();

export default salonStore;
