import { observer } from "mobx-react";
import salonStore from "../../store/salonStore";
import UserItem from "./UserItem";

const UserList = () => {
  const userList = salonStore.user.map((users) => (
    <UserItem user={users} key={users.id} />
  ));
  return <>{userList}</>;
};
export default observer(UserList);
