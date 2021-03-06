import SideBar from "./components/molecules/SideBar";
import Navbar from "./components/molecules/Navbar";
import "assets/scss/style.css";

function Layout({children}) {

  return (
    <div style={{
      display: "flex",
      flexDirection: "row"
    }}>
      <SideBar />
      <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
        <Navbar/>
        <div style={{position: "relative", overflow:"hidden"}}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
