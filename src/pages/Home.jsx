import BlogCard from "@/components/blog/BlogCard";
import { Separator } from "@/components/ui/separator";
import blogData from "@/data/blog.json"; // Import the JSON data
import Aside from "@/components/Aside";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* === main container === */}
      <main className="flex-1 max-w-screen-md lg:max-w-full mx-auto ">
        <div className="flex flex-col ">
          {/* Loop through the blogs data and render BlogCard for each */}
          {blogData.map((blog, index) => (
            <div key={blog.id}>
              <BlogCard blog={blog} />
              {/* Add a separator except after the last blog */}
              {index < blogData.length - 1 && (
                <Separator className="mt-4" />
              )}{" "}
            </div>
          ))}
        </div>
      </main>
      {/* === sidebar === */}
      {/* <aside className="hidden lg:block w-[30%]">Recommended topics</aside> */}
      <Aside />
    </div>
  );
}
