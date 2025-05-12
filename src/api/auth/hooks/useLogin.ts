import { useMutation } from '@tanstack/react-query';

import { login, type LoginInput, type LoginResponse } from '@/api/auth/login';
import { keys } from '@/api/auth/keys';

export const useLogin = () => {
  const {
    mutate: doLogin,
    data,
    isPending,
    isError,
    error,
  } = useMutation<LoginResponse, Error, LoginInput>({
    mutationFn: login,
    mutationKey: [keys.login()],
  });

  return { doLogin, data, isPending, isError, error };
};