import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        OOPS!
      </h1>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Page not found
      </h3>
      {/* <p className="leading-7 [&:not(:first-child)]:mt-6">Go to home page</p> */}
      <Button
        asChild
        className="ml-3 px-6 mt-4">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
}
