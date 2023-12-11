import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cols from "./components/Cols";
import Foo1 from "./components/Foo1";
import Foo2 from "./components/Foo2";

function App() {
  return (
    <div>
      <Navbar />
      <Product />
      <Cols />
      <Foo1 />
      <Foo2 />
    </div>
  );
}

export default App;
