import url from "./url";

export async function IndexLoader() {
  const response = await fetch(url + "/")
  const data = await response.json()

  console.log("INDEX LOADER: ", data)
  return data
}

export const ShowLoader = async ({params}) => {
  const response = await fetch(url + "/" + params.id)
  const data2 = await response.json()

  console.log("SHOW LOADER: ", data2)
  return data2
}

