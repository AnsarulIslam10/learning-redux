import Logo from "@/assets/clover.png";
import { Link } from "react-router";
export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <img src={Logo} alt="" className="w-16" /><span className="font-bold -ml-3">Task</span>Master
      </div>
      <Link to={"/"} >Tasks</Link>
      <Link to={"/users"} >Users</Link>
    </nav>
  );
}
