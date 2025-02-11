import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        
        {/* Add your product listing here */}
      </div>
    </div>
  );
}

export default App;
