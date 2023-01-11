import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div>
      <NavBar/>
      {props.children}
      <Footer/>
    </div>
  );
}
