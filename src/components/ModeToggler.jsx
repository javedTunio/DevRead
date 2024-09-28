import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon } from "lucide-react";

export default function ModeToggler() {
  // Initialize mode from localStorage, falling back to "system"
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme-mode");
    return savedMode || "system"; // Default to "system" if no saved mode
  });
  const [systemTheme, setSystemTheme] = useState(null); // State to track system theme

  // Effect to detect system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    // Set initial system theme
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    // Add event listener for system theme changes
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Cleanup on component unmount
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // Effect to apply the selected mode
  useEffect(() => {
    const isDarkMode =
      mode === "dark" || (mode === "system" && systemTheme === "dark");
    document.body.classList.toggle("dark", isDarkMode);
  }, [mode, systemTheme]);

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
    localStorage.setItem("theme-mode", selectedMode); // Save mode in local storage
  };

  // Get the appropriate icon based on the current mode
  const getIcon = () => {
    if (mode === "dark") return <MoonIcon />;
    if (mode === "light") return <SunIcon />;
    return systemTheme === "dark" ? <MoonIcon /> : <SunIcon />; // System mode reflects the system theme
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="rounded-full p-2 h-fit outline-none focus:outline-none">
          {getIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="max-w-min">
        <DropdownMenuItem onClick={() => handleModeChange("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleModeChange("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleModeChange("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
