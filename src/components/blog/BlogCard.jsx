import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Adjust the import according to your file structure

export default function BlogCard({ blog }) {
  return (
    <div className="flex items-start">
      {/* Wrap the entire card in a link */}
      <Link
        to={`/blogs/${blog.id}`}
        className="flex w-full mt-4">
        {/* === Blog Content on the Left === */}
        <div className="flex-1 p-4">
          {/* Author and Date Information */}
          <div className="text-sm text-gray-500 mb-2">
            By <span className="font-medium">{blog.author}</span> on{" "}
            <span>{blog.date}</span>
          </div>

          {/* Title and Summary */}
          <div>
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <p className="text-muted-foreground">{blog.summary}</p>
          </div>

          {/* Tags */}
          <div className="mt-2">
            {blog.tags.map((tag, index) => (
              <Button
                key={index}
                variant="secondary"
                asChild
                size="sm"
                className="mr-2 rounded-full text-xs h-fit py-1 px-3"
                onClick={(e) => e.stopPropagation()} // Stop propagation on button click
              >
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* === Blog Image on the Right === */}
        <div className="w-[150px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
    </div>
  );
}
