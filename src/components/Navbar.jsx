// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, SquarePen } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { useState } from "react";
import { Separator } from "./ui/separator";

export default function Navbar() {
  const [text, setText] = useState(false);
  return (
    // <nav className="bg-gray-800 text-white shadow-lg">
    //   <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    //     {/* Logo as a link to home */}
    //     <Link
    //       to="/"
    //       className="text-lg font-bold flex items-center">
    //       <Book />
    //       <span className="hidden md:block ml-2 leading-none">DevRead</span>
    //     </Link>
    //     <ul className="flex space-x-4">
    //       <li>
    //         <Link
    //           to="/"
    //           className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/about"
    //           className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/login"
    //           className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
    //           Login
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/signup"
    //           className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
    //           Signup
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <header className="  mb-8">
      <div className=" flex justify-between items-center py-4">
        {/* === logo === */}
        <div className="text-3xl font-bold text-primary  ">
          <Link
            to="/"
            className="md:hidden  ">
            DR
          </Link>
          <Link
            to="/"
            className="hidden md:block">
            DevRead
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="secondary"
                  className="">
                  <Search size={24} />
                </Button>
              </DialogTrigger>
              <DialogContent className=" sm:w-[90vw] max-w-screen-md max-h-[80vh] overflow-y-auto">
                <div className="mt-8 my-4 flex gap-4 ">
                  <Input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <Button type="submit">
                    <Search size={24} />
                  </Button>
                </div>
                <div>{text}</div>
              </DialogContent>
            </Dialog>
          </div>
          {/* === will render on auth conditions === */}
          <Button
            asChild
            className=" "
            variant="secondary">
            <Link to="">
              <SquarePen size={14} /> <span className="ml-2">Write</span>
            </Link>
          </Button>
          {/* === will render on auth conditions === */}
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button
              asChild
              variant="outline">
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
}
