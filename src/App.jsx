import { Outlet } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";
import "./App.css";
import "./index.css"

function App() {
  return (
    <div className="app" >
      <Header>
        <Navigation />
      </Header>
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
