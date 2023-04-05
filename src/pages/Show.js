import { useLoaderData } from "react-router-dom";

const Show = (props) => {
  const post = useLoaderData();

  return (
    <div className="show" action={`posts/${post.id}`} method="post">
      <img src={post.image} alt={post.title}/>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
    )
  }
  
  export default Show;