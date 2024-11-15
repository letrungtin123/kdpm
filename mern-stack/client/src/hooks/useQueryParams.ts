import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]);
  return queryParams;
};
