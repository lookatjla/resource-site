import { redirect } from "react-router-dom";
import url from "./url";

// const URL = "http://localhost:4000"

export const createAction = async ({ request }) => {
  const formData = await request.formData();

// create a new post
  const newPost = {
    image: formData.get("image"),
    title: formData.get("title"),
    body: formData.get("body"),
  }

// request to create route in backend
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
  return redirect("/posts");
}

export async function updateAction({ request, params }) {
  const formData = await request.formData();

  const updatedPost = {
    image: formData.get("image"),
    title: formData.get("title"),
    body: formData.get("body"),
  };

  await fetch(url + params.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });

  return redirect("/posts");
}

export async function deleteAction({params}) {
  const id = params.id

  await fetch(url + id + "/", {
      method: "delete"
  })

  // redirect
  return redirect("/posts")
}