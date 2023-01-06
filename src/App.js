
import { Route, Routes } from "react-router-dom";
import AddTask from "./Components/AddTask/AddTask";
import Home from "./Components/Home/Home";

import UsersLists from "./Components/Main/UsersLists/UsersLists";
import NotFound from "./Components/NotFound/NotFound";
import ShowTask from "./Components/Main/ShowTask/ShowTask";

function App() {


  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='addtask' element={<AddTask />} />
        <Route path='showtask' element={<ShowTask />} />
        <Route path='usersLists' element={<UsersLists />} />
        <Route path='*' element={<NotFound />} />


      </Routes>
    </div>
  );
}

export default App;
