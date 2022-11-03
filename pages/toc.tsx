import Link, { LinkProps } from "next/link";

interface Content {
  label: string;
  page: LinkProps["href"];
}

export default function tableOfContents() {
  const contents: Content[] = [
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
    {
      label: "Javascript",
      page: "/contents/javascript",
    },
  ];

  return (
    <section className="border-2 border-gray-700 p-3 h-full">
      <h2 className="h-5% text-4xl">Table to contents</h2>
      <ul className="mt-2 h-95% w-6/12 mx-auto text-lg text-slate-900 overflow-y-auto pb-7">
        {contents.map((content) => (
          <li key={content.label}>
            <Link
              href={content.page}
              className="h-14 m-6 mt-4 p-4 border border-orange-900 text-gray-900 bg-orange-200 flex items-center justify-center rounded-lg hover:scale-105"
            >
              Javascript
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
