import { Routes, Route } from "react-router-dom";
import { Login} from "./pages/register";
import { Layout } from "./layout/layout";
import { Catgory } from "./pages/catgory";
import { Product } from "./pages/product";

function App() {
  return (
    <div className="flex items-center justify-center   w-[100%] h-[130vh] bg-[url('https://storage.kun.uz/source/1/-5V971Hlt5lbewlhlBuRLqNkMmoen7I6.jpg')] bg-no-repeat bg-cover">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Catgory />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
