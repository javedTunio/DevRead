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
import useAuth from "@/hooks/useAuth";

export default function UserMenu() {
  const { currentUser, logout } = useAuth(); // getting current logged in user

  const userLinks = [
    {
      href: "/profile",
      label: "Profile",
      icon: <UserCircle size={18} />,
    },
    {
      href: "/library",
      label: "Library",
      icon: <BookOpen size={18} />,
    },
    {
      href: "/stories",
      label: "Stories",
      icon: <Newspaper size={18} />,
    },
    {
      href: "/stats",
      label: "Stats",
      icon: <BarChart2 size={18} />,
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
          <Avatar className="h-8 w-8 ">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      {currentUser ? (
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
                  <span className="ml-2">{link.label}</span>
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
              onClick={() => logout()}>
              <div className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </div>
              <span className=" text-xs text-muted-foreground">
                {currentUser.email}
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
