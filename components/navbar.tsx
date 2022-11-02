import Link, { LinkProps } from "next/link";
import { Fira_Code as BrandFont } from "@next/font/google";
import { cs } from "../constants";

interface Link {
  label: string;
  href: LinkProps["href"];
}

const brandFont = BrandFont({
  weight: ["400"],
});

export default function Navbar() {
  const links: Link[] = [
    {
      label: "Table of contents",
      href: "/toc",
    },
  ];

  return (
    <nav className="h-12 w-full bg-slate-700 absolute top-0 left-0 flex justify-end items-center">
      <Link
        href="/"
        className={cs(
          brandFont.className,
          "flex flex-1 mx-4 text-orange-400 font-normal text-3xl italic"
        )}
      >
        BISCUITS
      </Link>
      <ul>
        {links.map((link) => (
          <li className="text-white mr-4" key={link.label}>
            <Link href={link.href}>Table of contents</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
