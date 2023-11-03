import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProducts from "./Pages/NewProducts";
import TotalProducts from "./Pages/TotalProducts";
import Dashboard from "./Pages/Dashboard";
import Header from './Components/Header';
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/newproduct" element={<NewProducts />} />
            <Route path="/totalproducts" element={<TotalProducts />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
