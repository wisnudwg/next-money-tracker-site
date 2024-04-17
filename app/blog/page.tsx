import Link from "next/link";
import axios from "axios";

async function getBlogPosts() {
  try {
    const { data } = await axios.get(`${process.env.EP}blogs`)
    return data
  } catch (err) {
    console.log(err)
    return []
  }
}

export default async function Blog() {
  const blogs = await getBlogPosts();

  return(
    <section className="h-screen p-10">
      <div className="text-center mb-10">
        <h1 className="font-semibold text-[2rem]">Blogs</h1>
        <p className="text-[1.25rem]">These are a few blogs related to our apps. There are some issues new users might encounter and we hope these posts help!</p>
      </div>
      <br />
      {Array.isArray(blogs) && blogs.length > 0 ? <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="">
            <Link href={`/blog/${blog.id}`} target="_blank">
              <div className="cursor-pointer transition-all ease-in-out duration-200 hover:bg-green-400 rounded-lg p-5">
                <h2 className="font-semibold text-[1.5rem]">{blog.title}</h2>
                <p className="">{blog.meta}</p>
              </div>
            </Link>
            <hr /><br />
          </li>
        ))}
      </ul> : <div className="flex items-center justify-center font-semibold italic text-[1.5rem] h-[50vh]">No Articles Available</div>}
    </section>
  )
}