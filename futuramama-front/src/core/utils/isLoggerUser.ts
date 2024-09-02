export const isLoggedUser = (): boolean => {
  return localStorage.getItem("token") ? true : false;
};
