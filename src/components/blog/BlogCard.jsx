import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Adjust the import according to your file structure

export default function BlogCard({ blog }) {
  return (
    <div className="flex items-start">
      {/* Wrap the entire card in a link */}
      <Link
        to={`/blogs/${blog.id}`}
        className="flex items-start md:items-center w-full mt-4">
        {/* === Blog Content on the Left === */}
        <div className="flex-1 pr-3">
          {/* Author and Date Information */}
          <small className="text-xs md:text-sm text-muted-foreground">
            By <span className="font-medium">{blog.author}</span> on{" "}
            <span>{blog.date}</span>
          </small>

          {/* Title and Summary */}
          <div>
            <h2 className="pb-2 text-xl md:text-3xl font-semibold tracking-tight">
              {blog.title}
            </h2>
            <p className="text-sm md:text-base md:leading-7">{blog.summary}</p>
          </div>

          {/* Tags */}
          <div className="mt-1">
            {blog.tags.map((tag, index) => (
              <Button
                key={index}
                variant="secondary"
                asChild
                className="mr-1 mt-1   text-xs md:text-sm h-fit py-1 px-2"
                onClick={(e) => e.stopPropagation()} // Stop propagation on button click
              >
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* === Blog Image on the Right === */}
        <div className="w-[120px] md:w-[150px] ">
          <img
            src={blog.image}
            alt={blog.title}
            className=" h-full w-full object-cover"
          />
        </div>
      </Link>
    </div>
  );
}
