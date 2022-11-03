import { useRouter } from "next/router";

export const useParams = () => {
  const router = useRouter();
  return router.query;
};
