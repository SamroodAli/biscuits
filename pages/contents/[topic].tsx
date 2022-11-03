import { useParams } from "../../hooks/useParams";
import { useState, useMemo } from "react";
import { DropDown, DropDownItem } from "../../components/DropDown";
import {
  Roboto,
  Inter,
  Fira_Mono,
  Montserrat,
  Oswald,
} from "@next/font/google";
import { cs } from "../../constants";

const roboto = Roboto({ weight: ["400"] });
const inter = Inter();
const firaMono = Fira_Mono({ weight: ["400"] });
const montSerrat = Montserrat();
const oswald = Oswald();

const fonts: DropDownItem[] = [
  {
    label: "Roboto",
    value: roboto.className,
    className: roboto.className,
  },
  {
    label: "Inter",
    value: inter.className,
    className: inter.className,
  },
  {
    label: "Fira Mono",
    value: firaMono.className,
    className: firaMono.className,
  },
  {
    label: "Mont Serrat",
    value: montSerrat.className,
    className: firaMono.className,
  },
  {
    label: "Oswald",
    value: oswald.className,
    className: oswald.className,
  },
];

export default function Content() {
  const { topic } = useParams();
  // fetch content
  const content = "some content";

  const [font, setFont] = useState<DropDownItem>(fonts[0]);

  const onFontChange = (f: DropDownItem) => {
    setFont(f);
  };

  return (
    <>
      <header>
        <h1 className="text-4xl uppercase text-center">{topic}</h1>
      </header>
      <section>
        <DropDown items={fonts} currentItem={font} onItemClick={onFontChange} />
        <p className={cs(font.value, "text-2xl")}>{content}</p>
      </section>
    </>
  );
}
