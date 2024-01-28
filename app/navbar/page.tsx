import ActionButton from "./Action-button";
import Logo from "./Logo";
import { NavigationBar } from "./Navigation-bar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b-2 h-40">
      <Logo />
      <NavigationBar />
      <ActionButton />
    </div>
  );
};

export default Navbar;
