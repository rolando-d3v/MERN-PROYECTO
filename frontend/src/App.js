import { BrowserRouter } from "react-router-dom";
import Sidebar from "./layout/sidebar/Sidebar";
import AppRouter from "./routers/AppRouter";


export default function App() {

  return (
    <div  >
      <BrowserRouter>
       <Sidebar  />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
