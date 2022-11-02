import { ReactNode } from "react";
import { Roboto } from "@next/font/google";
import { cs } from "../constants";
import Navbar from "../components/navbar";

interface Props {
  children: ReactNode;
}

export const roboto = Roboto({
  weight: ["400", "500", "700"],
});

const page: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main
        className={cs(roboto.className, "h-screen bg-orange-100 p-4 pt-16")}
      >
        {children}
      </main>
    </>
  );
};

export default page;
