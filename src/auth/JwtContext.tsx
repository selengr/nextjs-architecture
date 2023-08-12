'use client';
import {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo
} from 'react';
// utils
import callApi from '../utils/axios';
import localStorageAvailable from '../utils/localStorageAvailable';
//
import { isValidToken, setSession } from './utils';
import {
  ActionMapType,
  AuthStateType,
  AuthUserType,
  JWTContextType
} from './types';
import { jwtVerify  } from 'jose';
import { cookies } from 'next/headers'; 
import axios from '../utils/axios';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

enum Types {
  INITIAL = 'INITIAL',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT'
}

type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  user: null
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      user: null
    };
  }
  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext<JWTContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storageAvailable = localStorageAvailable();

  const initialize = useCallback(async () => {
    try {
      const accessToken = storageAvailable
        ? localStorage.getItem('accessToken')
        : '';

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await callApi.get('/api/account/my-account');

        const { user } = response.data;

        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: true,
            user
          }
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  }, [storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email: string, password: string) => {
    const response = await callApi.post('/api/oauth/v1/authenticate', {
      email,
      password
    });
    const { accessToken, user } = response.data;

    setSession(accessToken);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user
      }
    });
  }, []);

  // REGISTER
  const register = useCallback(
    async (
      email: string,
      password: string,
      firstName: string,
      lastName: string
    ) => {
      const response = await callApi.post('/api/account/register', {
        email,
        password,
        firstName,
        lastName
      });
      const { accessToken, user } = response.data;

      localStorage.setItem('accessToken', accessToken);

      dispatch({
        type: Types.REGISTER,
        payload: {
          user
        }
      });
    },
    []
  );

  // LOGOUT
  const logout = useCallback(() => {
    setSession(null);
    dispatch({
      type: Types.LOGOUT
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: 'jwt',
      login,
      loginWithGoogle: () => {},
      loginWithGithub: () => {},
      loginWithTwitter: () => {},
      register,
      logout
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      logout,
      register
    ]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}





// new featuer to andle auth varification
interface UserJwtPayload {
  jti: string
  iat: number
}

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY

  if( !secret || secret?.length === 0 ){
    throw new Error('The environment variable JWT_SECRET KEY is not set.')
  }
  return secret
}


export  const verifyAuth = async (token: string | Uint8Array) => {
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()))
    return verified.payload as UserJwtPayload
  } catch (error) {
    throw new Error('your token has expired')
  }
}


export const getUser = async (accessToken : string | null) => {
  if(!accessToken) {
    throw new Error("Missing token")
  }
  try {
    if (accessToken && isValidToken(accessToken)) {
      setSession(accessToken)

      const response = await callApi.get("/user")
      const { user } = response.data;
      // dispatch({
      //   type: Types.INITIAL,
      //   payload: {
      //     isAuthenticated: true,
      //     user
      //   }
    }
   } catch (err: any) {
     console.log(err.response.data);
    //  dispatch({
    //   type: Types.INITIAL,
    //   payload: {
    //     isAuthenticated: false,
    //     user: null
    //   }
    // });
     return null;
   }
};



export const Login = async () => {
  
    // let data = {
    //   client_id: "ssoClient-2",
    //   redirect_uri: "http://localhost",
    //   client_secret: "ssoClientSecret-2",
    //   grant_type:  "authorization_code",
    //   code,
    // }

    const params = [
      "client_id=ssoClient-2",
      "redirect_uri=" + "http://localhost",
      "response_type=code",
      "scope=openid",
      "response_mode=form_post"
  ];

      // LOGIN
      // try {
      //   const response = await axios.get("http://apifpr.mresalat1.com:8080/sso/oauth2/authorize?client_id=ssoClient-2&redirect_uri=https%3A%2F%2Foidcdebugger.com%2Fdebug&scope=openid&response_type=code&response_mode=query&state=n458mqq15e&nonce=imx79nid8c")
      //   console.log('response.data ================================= :>> ', response);
      // } catch (error) {
      //   console.error('Error:========', error);
      // }
      
};

// export const getToken = async (code : string | null, redirectUrl :string | null) => {
  
//     let data = {
//       client_id: "ssoClient-2",
//       redirect_uri: "http://localhost",
//       client_secret: "ssoClientSecret-2",
//       grant_type:  "authorization_code",
//       code,
//     }

//        const response = await callApi.post("http://apifpr.mresalat2.com/sso/oauth2/?"+ data)
//        const { accessToken, user } = response.data;

// };