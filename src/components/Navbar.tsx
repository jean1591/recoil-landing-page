import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* LOGO AND APP NAME */}
        <div className="flex items-center justify-start gap-2">
          <Image src="/icon.png" alt="logo" width={60} height={60} />
          <p className="text-2xl font-bold text-gray-900">Recoil</p>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link href="#features">Features</Link>
          <p>Community</p>
        </div>
      </div>
    </nav>
  )
}
