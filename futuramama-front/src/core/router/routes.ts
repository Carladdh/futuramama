export enum SwitchRoutesPath {
  root = "/",
  home = "/home",
  mama = "/mama",
  bebe = "/bebe",
  alimentacion = "/alimentacion",
  fotos = "/fotos",
  preguntas = "/preguntas",
  diario = "/diario",
  login = "/login",
  register = "/register",
  user = "/user",
}

interface SwitchRoute {
  path: string;
  name: string | null;
  active: boolean;
}

export const switchRoutes: SwitchRoute[] = [
  {
    path: SwitchRoutesPath.root,
    name: null,
    active: false,
  },
  {
    path: SwitchRoutesPath.home,
    name: "Home",
    active: true,
  },
  {
    path: SwitchRoutesPath.mama,
    name: "Mama",
    active: true,
  },
  {
    path: SwitchRoutesPath.bebe,
    name: "Bebe",
    active: true,
  },
  {
    path: SwitchRoutesPath.alimentacion,
    name: "Alimentacion",
    active: true,
  },
  {
    path: SwitchRoutesPath.fotos,
    name: "Fotos",
    active: false,
  },
  {
    path: SwitchRoutesPath.preguntas,
    name: "Preguntas",
    active: false,
  },
  {
    path: SwitchRoutesPath.diario,
    name: "Diario",
    active: true,
  },
  {
    path: SwitchRoutesPath.login,
    name: "Login",
    active: false,
  },
  {
    path: SwitchRoutesPath.register,
    name: "Register",
    active: false,
  },
  {
    path: SwitchRoutesPath.user,
    name: "User",
    active: false,
  },
];
