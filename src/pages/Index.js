import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const posts = useLoaderData();

    return (
        <div>
            <h2>Create a Review</h2>
            <Form action='/create' method='post'>
                <input type='input' name='title' placeholder='Restaurant Name'/>
                <input type='input' name='image' placeholder='Food Image'/>
                <input type='input' name='body' placeholder='Review'/>
                <input type='submit' value='Create Review'/>
            </Form>

            <h2>Your Reviews</h2>
            {posts.map (post => (
                <div>
                    <Link to={`/${post._id}`} className='post'>
                        <img src={post.image} alt={post.title}/>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>{post.body}</p>
                </div>
            ))}   
        </div>    
    )
}
export default Index;        