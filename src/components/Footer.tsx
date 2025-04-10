import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-slate-300 text-slate-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-8 py-20">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          <Link
            target="_blank"
            href="/privacy-policy"
            className="hover:text-slate-600"
          >
            Privacy Policy
          </Link>
        </nav>
        <p className="mt-10 text-center text-sm/6 font-medium">
          &copy; {new Date().getFullYear()} Recoil. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
