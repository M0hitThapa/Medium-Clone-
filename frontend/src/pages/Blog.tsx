import FullBlog from "../components/FullBlog";
import FullBlogSkeleton from "../components/FullBlogSkeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
    
  });
  if(loading || !blog) {
    return <div>
      <FullBlogSkeleton />
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  )
}

export default Blog