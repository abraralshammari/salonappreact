import salonStore from "../../store/salonStore";

const UserItem = ({ user }) => {
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.password}</p>
      <p>{user.phone}</p>
      <p>{user.gender}</p>
      <button onClick={() => salonStore.removeUser(user.id)}>
        {" "}
        Remove User{" "}
      </button>
    </div>
  );
};
export default UserItem;
