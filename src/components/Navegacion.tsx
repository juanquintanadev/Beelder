import Link from "next/link"

function Navegacion() {
  return (
    <nav className="flex flex-col gap-4">
        <Link href='/'>Home</Link>
        <Link href='/support'>Support</Link>
        <Link href='/airplane/list'>Planes</Link>
        <Link href='/availability'>Availability</Link>
    </nav>
  )
}

export default Navegacion