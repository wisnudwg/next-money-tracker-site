import Link from "next/link";

export default function Blog() {
  const blogs = [1,2,3,4,5].map((item) => ({
    id: item,
    title: `Article ${item}`,
    meta: `article ${item} metadata`,
    body: `Body of article ${item}`,
  }));

  return(
    <section className="h-screen p-10">
      <div className="text-center mb-10">
        <h1 className="font-semibold text-[2rem]">Blogs</h1>
        <p className="text-[1.25rem]">These are a few blogs related to our apps. There are some issues new users might encounter and we hope these posts help!</p>
      </div>
      <br />
      {<ul>
        {Array.isArray(blogs) ? blogs.map((blog, index) => (
          <li key={index} className="">
            <Link href={`/blog/${blog.id}`} target="_blank">
              <div className="cursor-pointer transition-all ease-in-out duration-200 hover:bg-green-400 rounded-lg p-5">
                <h2 className="font-semibold text-[1.5rem]">{blog.title}</h2>
                <p className="">{blog.meta}</p>
              </div>
            </Link>
            <hr /><br />
          </li>
        )) : null}
      </ul>}
    </section>
  )
}