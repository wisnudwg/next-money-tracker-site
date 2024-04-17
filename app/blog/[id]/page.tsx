export default function BlogPost({ params }: { params: { id: string | number } }) {
  return(
    <section className="h-screen p-10">
      Blog Post <b>{params.id}</b>
    </section>
  )
}