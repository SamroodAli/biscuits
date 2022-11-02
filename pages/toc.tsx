import Link, { LinkProps } from "next/link";

interface Content {
  label: string;
  page: LinkProps["href"];
}

export default function tableOfContents() {
  const contents: Content[] = [
    {
      label: "Javascript",
      page: "/content/javascript",
    },
    {
      label: "Javascript",
      page: "/content/javascript",
    },
    {
      label: "Javascript",
      page: "/content/javascript",
    },
    {
      label: "Javascript",
      page: "/content/javascript",
    },
    {
      label: "Javascript",
      page: "/content/javascript",
    },
    {
      label: "Javascript",
      page: "/content/javascript",
    },
    {
      label: "Javascript",
      page: "/content/javascript",
    },
    {
      label: "Javascript",
      page: "/content/javascript",
    },
    {
      label: "Javascript",
      page: "/content/javascript",
    },
  ];

  return (
    <section className="border-2 border-gray-700 p-3 h-full">
      <h2 className="h-5%">Table to contents</h2>
      <ul className="mt-2 h-95% text-lg text-slate-900 grid md:grid-cols-4 overflow-y-auto">
        {contents.map((content) => (
          <li
            key={content.label}
            className="h-14 md:h-[300px] m-3 border border-orange-900 text-gray-900 bg-orange-300  flex items-center justify-center p-4"
          >
            <Link href={content.label}>Javascript</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
