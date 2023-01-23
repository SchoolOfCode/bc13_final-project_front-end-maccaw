import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useAuth } from "../../context/AuthContext";


export default function Layout(props) {
  const { currentUser, logout, isUserAuthenticated } = useAuth();

  return (
    <div>
      <NavBar />

      {props.children}
      <Footer />
    </div>
  );
}
