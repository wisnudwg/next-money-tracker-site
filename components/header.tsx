import Link from "next/link"

export default function Header() {
  const routes = [
    { title: 'Home', href: '/' },
    { title: 'Features', href: '/features' },
    { title: 'Blog', href: '/blog' },
  ];
  return(
    <header className="sticky top-0 inline-flex justify-center align-middle w-full gap-10 line-clamp-4 font-semibold text-[1.2rem] bg-green-900 py-5 z-10">
      {routes.map((route, index) => (
        <Link key={index} href={route.href} className="text-white hover:text-green-400 transition-all ease-in-out duration-200">{route.title}</Link>
      ))}
    </header>
  )
}