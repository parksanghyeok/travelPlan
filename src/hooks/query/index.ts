import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../keys";
import { emailLoginAPI } from "../../api";
import { EmailUserData } from "../../types";
import { loginErrorMessage } from "../../utils/dataFormat";

/** 로그인 쿼리 -> useMutation 수정해야 사용 가능 **/
export const useLoginEmail = (params: EmailUserData) => {
  const queryclient = useQueryClient();
  const { data, isSuccess, isError, error, refetch } = useQuery({
    queryKey: [QUERY_KEYS.LOGIN_EMAIL],
    queryFn: () => emailLoginAPI(params),
    refetchOnWindowFocus: false,
    enabled: false,
    retry: 0,
  });

  return { data, isSuccess, isError, error, refetch };
};