// Images
import headerLogo from "src/assets/images/logos/logo.png";
const Header = () => {
  return (
    <header>
      <nav className="flex">
        <img src={headerLogo} className="w-[100px]" alt="" />
      </nav>
    </header>
  );
};

export default Header;
