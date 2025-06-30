import Logo from "@/assets/clover.png";
import { Link } from "react-router";
import { ModeToggle } from "../ui/mode-toggler";
export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5">
      <div className="flex items-center">
        <img src={Logo} alt="" className="w-16" />
        <span className="font-bold -ml-3">Task</span>Master
      </div>
      <div className="flex gap-5">
        <Link to={"/"}>Tasks</Link>
        <Link to={"/users"}>Users</Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
