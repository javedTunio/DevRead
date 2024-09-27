import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  UserCircle,
  BookOpen,
  Newspaper,
  BarChart2,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react"; // Don't forget to import useState

export default function UserMenu() {
  const [user] = useState(false); // Change this based on your auth logic

  const userLinks = [
    {
      href: "/profile",
      label: "Profile",
      icon: <UserCircle className="mr-2 size-5" />,
    },
    {
      href: "/library",
      label: "Library",
      icon: <BookOpen className="mr-2 size-5" />,
    },
    {
      href: "/stories",
      label: "Stories",
      icon: <Newspaper className="mr-2 size-5" />,
    },
    {
      href: "/stats",
      label: "Stats",
      icon: <BarChart2 className="mr-2 size-5" />,
    },
  ];
  const secondaryLinks = [
    { href: "/settings", label: "Settings" },
    { href: "/refine-recommendations", label: "Refine recommendations" },
    { href: "/manage-publications", label: "Manage publications" },
    { href: "/help", label: "Help" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="Link"
          className=" relative h-fit w-fit p-0 rounded-full">
          <Avatar className="h-10 w-10 ">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      {user ? (
        <DropdownMenuContent
          className="p-4"
          align="end"
          forceMount>
          <DropdownMenuGroup>
            {userLinks.map((link, index) => (
              <DropdownMenuItem
                key={index}
                asChild>
                <Link
                  href={link.href}
                  className="flex items-center cursor-pointer">
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuGroup>
            {secondaryLinks.map((link, index) => (
              <DropdownMenuItem
                key={index}
                asChild>
                <Link
                  href={link.href}
                  className="cursor-pointer">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuItem>
            <Button
              variant="ghost"
              className="w-full flex flex-col items-center gap-1 "
              onClick={() => console.log("Sign out")}>
              <div className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </div>
              <span className=" text-xs text-muted-foreground">
                example@gmail.com
              </span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent
          className="p-4"
          align="end"
          forceMount>
          <div className="flex flex-col items-center gap-2 text-center max-w-64">
            <h3 className="text-lg font-semibold">Welcome Back!</h3>
            <p className="text-sm text-gray-500">
              To access your profile and favorite stories, please sign in.
            </p>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link
                  to="/login"
                  className="block w-full text-center">
                  Sign in
                </Link>
              </Button>
              <Button
                asChild
                variant="outline">
                <Link
                  to="/signup"
                  className="block w-full text-center">
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
