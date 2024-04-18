import axios from "axios";
import BlogAnimation from "@/components/client/blog-animation";

export async function getBlogPost(id: number | string) {
  try {
    const { data } = await axios.get(`${process.env.EP}blogs/${id}`)
    return data;
  } catch (err) {
    return null;
  }
}

export default async function BlogPost({ params }: { params: { id: string | number } }) {
  const blog = await getBlogPost(params.id); console.log(blog)

  return(
    <section className="h-screen p-20">
      <BlogAnimation>
        {blog?.id ? <>
          <h1 className="font-semibold text-[2rem]">{blog.title}</h1>
          <br /><hr /><br />
          <p className="text-[1.25rem]">{blog.body}</p>
        </> : <div className="flex items-center justify-center font-semibold text-[1.5rem] h-[50vh]">404 | Article Not Found</div>}
      </BlogAnimation>
    </section>
  )
}