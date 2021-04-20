import { useState } from "react";
import salonStore from "../../store/salonStore";

const CreateCategory = () => {
  const [data, setData] = useState({
    name: "",
  });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    salonStore.addCategory(data);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input onChange={handleChange} type="text" name="name" />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};
export default CreateCategory;
