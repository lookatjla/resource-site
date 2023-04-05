import { useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
  const post = useLoaderData();

  return (
    <div className="show" action={`posts/${post.id}`} method="post">
      <img src={post.image} alt={post.title}/>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <h3>Update {post.title}</h3>
      <Form action={`/update/${post._id}`} method="post">
        <input type="input" name="image" placeholder="Food Image" />
        <input type="input" name="title" placeholder="Restaurant Name" />
        <input type="input" name="body" placeholder="Your Review" />
        <button>Update</button>
      </Form>

      <Form action={`/delete/${post._id}`} method="post">
        <button>Delete Review</button>
      </Form>
    </div>
    )
  }
  
  export default Show;