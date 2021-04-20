import { useState } from "react";
import salonStore from "../../store/salonStore";

const CreateUser = () => {
  const [data, setData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
  });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]:
        event.target.name === "phone"
          ? +event.target.value
          : event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    salonStore.addUser(data);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input onChange={handleChange} type="text" name="username" />

        <label>First Name:</label>
        <input onChange={handleChange} type="text" name="firstName" />

        <label>Last Name:</label>
        <input onChange={handleChange} type="text" name="lastName" />

        <label>Email:</label>
        <input onChange={handleChange} type="text" name="email" />

        <label>Password:</label>
        <input onChange={handleChange} type="text" name="password" />

        <label>Phone:</label>
        <input onChange={handleChange} type="number" name="phone" />

        <label>Gender:</label>
        <input onChange={handleChange} type="text" name="gender" />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
export default CreateUser;
