import blogData from "@/data/blog.json"; // Import the JSON data
import { Link } from "react-router-dom";

export default function TrendingBlogs() {
  return (
    <div className="flex flex-col gap-4">
      {/* Loop through the first 4 blogs and render BlogCard for each */}
      {blogData.slice(0, 5).map((blog) => (
        <Link
          to={`/blogs/${blog.id}`}
          key={blog.id}
          className="w-full flex items-start gap-4">
          {/* === Blog Image on the Right === */}
          <div className="lg:w-[100px] ">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>
          {/* === Blog Details === */}
          <div className="flex-1">
            {/* Author and Date Information */}
            <small className="text-xs md:text-sm text-muted-foreground">
              By <span className="font-medium">{blog.author}</span> on{" "}
              <span>{blog.date}</span>
            </small>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {blog.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
