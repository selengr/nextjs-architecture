// ----------------------------------------------------------------------
import { LOCALHOST } from "@/config-global";

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "http://apifpr.mresalat1.com:8080";
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------
const AuthParams = [
  "client_id=ssoClient-2",
  "redirect_uri=" + LOCALHOST,
  "response_type=code",
  "scope=openid",
  "response_mode=form_post"
];
// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/sso/oauth2/authorize?'+ AuthParams.join('&')),
  register: path(ROOTS_AUTH, '/register')
};
export const BOOKING = {
  bus: "bus",
  train: "train",
  flights : "flights" 
};

export const PATH_PAGE = {
  about: '/about-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,

  general: {
    app: path(ROOTS_DASHBOARD, '/app')
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail')
  },

  invoice: {
    root: path(ROOTS_DASHBOARD, '/invoice')
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog')
  }
};
