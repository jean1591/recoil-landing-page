import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="w-full font-medium text-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* LOGO AND APP NAME */}
        <div className="flex h-12 items-center justify-start gap-4 rounded-xl bg-gray-100 px-6">
          <Image
            src="/icon.png"
            alt="logo"
            width={30}
            height={30}
            className="m-0 p-0"
          />
          <Link href="/" className=" ">
            Recoil
          </Link>
        </div>

        <div className="flex h-12 items-center justify-end gap-4 rounded-xl bg-gray-100 px-6">
          <Link href="#features">Features</Link>
          {/* <Link href="#why-recoil">Why Recoil?</Link> */}
          <Link
            className="rounded-lg bg-gray-900 px-4 py-2 text-gray-100"
            href="#download"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  )
}
