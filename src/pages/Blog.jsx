import { useParams } from "react-router-dom";
import blogData from "@/data/blog.json"; // Import the JSON data
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Instagram,
  Linkedin,
  MessageSquareMore,
  Twitter,
} from "lucide-react";
import BlogNotFound from "@/components/blog/BlogNotFound";

export default function Blog() {
  const { id } = useParams();
  // === filtering blog ===
  const blog = blogData.find((blog) => blog.id === parseInt(id, 10));

if (!blog || id != blog.id) {
  return <BlogNotFound />;
}

  return (
    <main>
      <div className="mb-4 max-w-screen-md mx-auto px-6">
        <div className="w-full mb-4 overflow-hidden">
          <img
            className="w-full h-auto max-h-[60vh] object-cover mx-auto"
            src={blog.image}
            alt={blog.title}
          />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {blog.title}
        </h1>
        {/* <Separator className="my-2" /> */}
        <p className="leading-7 text-muted-foreground">
          By <span className="font-medium cursor-pointer">{blog.author}</span>{" "}
          on <span>{blog.date}</span>
        </p>
        <Separator className="my-2 mt-4" />
        <div className="flex items-center justify-between">
          {/* === like comment === */}
          <div className="space-x-2">
            <Button
              variant="ghost"
              className="p-2">
              <Heart size={18} />
            </Button>
            <Button
              variant="ghost"
              className="p-2">
              <MessageSquareMore size={18} />
            </Button>
          </div>
          {/* === share links === */}
          <div className="space-x-2">
            <Button
              variant="icon"
              className="p-2">
              <Linkedin size={18} />
            </Button>
            <Button
              variant="icon"
              className="p-2">
              <Twitter size={18} />
            </Button>
            <Button
              variant="icon"
              className="p-2">
              <Instagram size={18} />
            </Button>
          </div>
        </div>
        <Separator className="my-2" />

        {/* === dummy data === */}
        <div className="mt-10 ">
          <p className="leading-7 [&:not(:first-child)]:mt-6 bg-yellow-200 dark:bg-gray-700 w-fit font-medium">
            NOTE: This is dummy data, later will be replaced by actual blog
            content.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Web development has rapidly become one of the most in-demand skills
            in the digital age. Whether you&apos;re building a personal
            portfolio, a blog, or a full-scale application, understanding the
            core principles of web development is essential. In this guide, we
            will cover everything from basic HTML to advanced concepts in
            frontend and backend development. Through detailed explanations and
            practical examples, you will be equipped to tackle projects of any
            scale.
          </p>
          <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight my-4 ">
            1. Understanding the Basics
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Before diving into frameworks and libraries, it’s crucial to have a
            solid understanding of the core technologies: HTML, CSS, and
            JavaScript. These form the foundation of web development. HTML
            provides the structure, CSS defines the style, and JavaScript brings
            your site to life with interactivity.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Let’s start with HTML, which stands for Hypertext Markup Language.
            It’s used to create the skeleton of a webpage. With HTML, you can
            structure your site into meaningful sections, such as headers,
            footers, articles, and more. CSS (Cascading Style Sheets) is used to
            enhance this structure with colors, typography, and layouts.
            Finally, JavaScript is the programming language of the web, allowing
            you to add dynamic elements such as sliders, modals, and interactive
            forms.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>HTML: The structure and semantics of a webpage.</li>
            <li>CSS: The styling and visual appearance.</li>
            <li>JavaScript: The interactivity and behavior.</li>
          </ul>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Each of these technologies has its own intricacies, but when
            combined, they form the building blocks of modern web development.
            For example, a simple webpage might start with a basic HTML
            structure that includes a header and a footer. From there, you can
            add CSS styles to create a visually appealing layout and use
            JavaScript to add animations or respond to user actions, such as
            button clicks.
          </p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            &quot;The best way to learn a new technology is by building
            projects. Theory is important, but applying what you learn is where
            the magic happens.&quot;
          </blockquote>
          <pre className=" p-4 overflow-x-auto my-6">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {`function sayHello() {\n  console.log("Hello, World!");\n}`}
            </code>
          </pre>
          <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight my-4 ">
            2. Exploring Frontend Frameworks
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            As you become comfortable with the basics, the next step is to
            explore frontend frameworks such as React, Vue, and Angular. These
            frameworks help developers build complex user interfaces more
            efficiently. React, for instance, introduced the concept of
            components and a virtual DOM, which dramatically simplified the way
            we build and manage UI states. Vue.js, on the other hand, is known
            for its simplicity and flexibility. Angular, a more opinionated
            framework, offers a complete solution for building dynamic web
            applications.
          </p>
          <ol className="list-decimal   my-6 ml-4  [&>li]:mt-2">
            <li>
              <strong>React:</strong> A library for building user interfaces,
              known for its component-based architecture.
            </li>
            <li>
              <strong>Vue.js:</strong> A progressive framework for building UIs,
              offering a simpler learning curve compared to React.
            </li>
            <li>
              <strong>Angular:</strong> A platform for building mobile and
              desktop web applications, often used in enterprise environments.
            </li>
          </ol>
          <figure>
            <img
              className="w-full h-auto max-h-[60vh] object-cover mx-auto"
              src={blog.image}
              alt={blog.title}
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {blog.title}
            </figcaption>
          </figure>

          <table className="w-full my-6 overflow-y-auto">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  King&apos;s Treasury
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  People&apos;s happiness
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Empty
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Overflowing
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Modest
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Satisfied
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Full
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Ecstatic
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
