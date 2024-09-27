import { useParams } from "react-router-dom";

export default function Blog() {
  // Extract the 'id' from the URL parameters
  const { id } = useParams();

  return (
    <div>
      <h1>Dynamic Blog Page</h1>
      {/* Show the blog id */}
      <p>Blog ID: {id}</p>
    </div>
  );
}
