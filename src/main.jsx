import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/*
const [first, second, third] = [
  "Destructed_Array_Item_1",
  "Destructed_Array_Item_2",
  "Destructed_Array_Item_3",
];
console.log(first);
console.log(second);
console.log(third);
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
