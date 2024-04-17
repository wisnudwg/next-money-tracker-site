export async function getBlogPost(id: number | string) {
  return {
    id,
    title: `Article ${id}`,
    meta: `metadata of article ${id}`,
    body: `Body of article ${id}`,
  }
}

export default async function BlogPost({ params }: { params: { id: string | number } }) {
  const blog = await getBlogPost(params.id);

  return(
    <section className="h-screen p-20">
      <h1 className="font-semibold text-[2rem]">{blog.title}</h1>
      <br /><hr /><br />
      <p className="text-[1.25rem]">{blog.body}</p>
    </section>
  )
}