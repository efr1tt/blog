import { Metadata } from "next"

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id)
  return {
    title: post.title,
  }
}

const getData = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json())
  return response
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id)
  console.log("data: ", post)
  return (
    <div>
      <h3>POST: </h3> {post.title}
      <h3>body: </h3> {post.body}
    </div>
  )
}
