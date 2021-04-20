import React from "react";
import CreateUser from "./Components/Create/CreateUser";
import UserList from "./Components/List-item/UserList";

function App() {
  return (
    <div>
      <div>
        <div>
          <CreateUser />
        </div>
        <div>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
