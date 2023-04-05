import { redirect } from "react-router-dom";

// const URL = "http://localhost:4000"

export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const newPost = {
    image: formData.get("image"),
    title: formData.get("title"),
    body: formData.get("body"),
  }

  await fetch("https://resource-backend.onrender.com/posts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
  // redirect to index
  return redirect("/")
}