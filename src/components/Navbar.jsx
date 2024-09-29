// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, SquarePen } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { useState } from "react";
import { Separator } from "./ui/separator";
import UserMenu from "./UserMenu";
import ModeToggler from "./ModeToggler";

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
    <header className="mb-4 lg:mb-8">
      <div className=" flex justify-between items-center py-4">
        {/* === logo === */}
        <div className="text-xl font-bold text-primary  ">
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
          {/* === search dialog === */}
          <div>
            <Dialog onOpenChange={() => setText(null)}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-2 h-fit ">
                  <Search size={18} />
                </Button>
              </DialogTrigger>
              <DialogContent className="top-[10vh] translate-y-0 sm:w-[90vw] max-w-screen-md  overflow-hidden">
                <div className="mt-8 my-4 flex items-center gap-4 ">
                  <Input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <Button type="submit">
                    <Search size={18} />
                  </Button>
                </div>
                {/* <div>{text}</div> */}
                <div className="overflow-y-auto max-h-[60vh]">
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          {/* === write button will render on auth conditions === */}
          {/* <Button
            asChild
            className=" px-4 h-fit "
            variant="ghost">
            <Link to="">
              <SquarePen size={18} />{" "}
              <span className="ml-1 text-sm">Write</span>
            </Link>
          </Button> */}
          {/* === mode toggler === */}
          <ModeToggler />
          {/* === signin/up will render on auth conditions === */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className=" px-4 h-fit ">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button
              asChild
              className=" px-4 h-fit "
              variant="outline">
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>

          {/* === user menu === */}
          {/* <UserMenu /> */}
        </div>
      </div>
      <Separator />
    </header>
  );
}
