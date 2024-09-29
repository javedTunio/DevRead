import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { TrendingDown } from "lucide-react";
import TrendingBlogs from "./blog/TrendingBlogs";

export default function Aside() {
  // Step 1: Define an array of tags
  const tags = [
    { id: 1, name: "JavaScript", link: "" },
    { id: 2, name: "React", link: "" },
    { id: 3, name: "Vue", link: "" },
    { id: 4, name: "Tailwind CSS", link: "" },
    { id: 5, name: "ShadCN UI", link: "" },
    { id: 6, name: "Web Development", link: "" },
    { id: 7, name: "Node.js", link: "" },
    { id: 8, name: "TypeScript", link: "" },
    { id: 9, name: "Next.js", link: "" },
    { id: 10, name: "Firebase", link: "" },

    // Add more tags as needed
  ];

  return (
    <aside className="hidden lg:flex lg:items-start w-[30%] mt-4">
      <Separator
        orientation="vertical"
        className="mr-4"
      />
      <div className="flex flex-col gap-4" >
        {/* === tags section === */}
        <div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
            Topics of Interest
          </h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Button
                asChild
                key={tag.id}
                variant="secondary"
                className="  px-4">
                <Link to={tag.link}>{tag.name}</Link>
              </Button>
            ))}
          </div>
        </div>
        {/* === trending blogs === */}
        <div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
            Topics of Interest
          </h4>
          <TrendingBlogs />
        </div>
      </div>
    </aside>
  );
}
