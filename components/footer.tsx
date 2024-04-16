import Link from "next/link"

export default function Footer() {
  const rcols = [
    {
      p: 'Contact Us',
      l: [
        { href: '/', t: 'Whatsapp' },
        { href: '/', t: 'Instagram' },
      ],
    },
    {
      p: 'Links',
      l: [
        { href: '/', t: 'Link 1' },
        { href: '/', t: 'Link 2' },
      ],
    }
  ];
  return(
    <footer className="grid grid-cols-2 w-screen bg-green-900 text-white py-10">
      <div className="flex justify-center align-middle">
        <div>Left</div>
      </div>
      <div className="grid grid-cols-2">
        {rcols.map((colItem, colIndex) => (
          <div key={colIndex}>
            <p className="font-semibold text-[1.1rem] text-green-400">{colItem.p}</p>
            <ul className="ml-5">
              {colItem.l.map((lItem, lIndex) => (
                <li key={lIndex}><Link href={lItem.href} className="text-white hover:text-green-400 transition-all ease-in-out duration-200">{lItem.t}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}