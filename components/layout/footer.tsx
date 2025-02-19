import Link from "next/link";

const footerLinks = [
  {
    title: "Resources",
    links: [
      { name: "SAGE playground", href: "/blog" },
      { name: "SAGE docs", href: "/newsletter" },
      { name: "Events", href: "/events" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-3">
            <Link href="/" className="text-2xl font-bold dark:text-white">
              CasinoJam
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-lg">
              CasinoJams runs on SAGE (Substrate Asset Game Engine) - a platform
              for building and playing games on the Polkadot Network.
            </p>
          </div>
          {footerLinks.map((category) => (
            <div key={category.title} className="text-right">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()}{" "}
            <Link href="https://ajuna.io" target="_blank" className="underline">
              Ajuna
            </Link>
            , powered by{" "}
            <Link
              href="https://polkadot.network"
              target="_blank"
              className="text-pink-600 dark:text-pink-500"
            >
              Polkadot
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
