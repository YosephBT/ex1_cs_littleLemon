import Nav from "./Nav";
import Logo from "../assets/img/Logo.svg";
const Header = () => {
  return (
    <header>
      <div className="logo"><img src={Logo} alt="Little Lemon Logo" /></div>
      <Nav />
    </header>
  );
};

export default Header;
