import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import NavBarLogIn from "../NavBar/NavBarLogIn";



export default function Layout(props) {
    const { currentUser, logout, isUserAuthenticated } = useAuth();

return (
    <div>
      { currentUser ? <NavBarLogIn/> : <NavBar/>  
      }
      

      {props.children}
      <Footer/>
    </div>
  );
}
