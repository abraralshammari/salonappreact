import React from "react";
//import user_add_list_
import CreateUser from "./Components/Create/CreateUser";
import UserList from "./Components/List-item/UserList";
//import category add_list
import CreateCategory from "./Components/Create/CreateCategory";
import CategoryList from "./Components/List-item/CategoryList";

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
    <div>
        <div>
          <CreateCategory />
    </div>
 
       <div>
          <CategoryList />
    </div>
    </div>

   </div>
  );
}

export default App;
