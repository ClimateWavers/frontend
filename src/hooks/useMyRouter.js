import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

const useMyRouter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  const rawParams = Array.from(searchParams.entries());

  const asPath =
    rawParams.length > 0 ? pathname.concat(`?${current.toString()}`) : pathname;

  const createQueryString = useCallback(
    (name, value) => {
      current.set(name, value);

      return current.toString();
    },
    // [searchParams, current ]
    // [ current ]
  );

  // console.log(current.toString());
  return {
    ...router,
    pathname,
    query: rawParams.reduce((a, b) => ({ ...a, [b[0]]: b[1] }), {}),
    createQueryString,
    asPath,
  };
};
export default useMyRouter;