import AddToCart from "./AddToCart";
import "./App.css";
import { DataContext, DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <AddToCart />
    </DataProvider>
  );
}

export default App;
