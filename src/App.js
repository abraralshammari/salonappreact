import React from "react";
import CreateCategory from "./Components/Create/CreateCategory";
import CategoryList from "./Components/List-item/CategoryList";

function App() {
  return (
    <div>
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
