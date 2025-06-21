import { PropsWithChildren, createContext, useContext, useState } from "react";
interface TokenContextProps {
  token: string | undefined;
  userId: string | undefined;
  setToken: (token: string | undefined) => void;
  setUserId: (id: string | undefined) => void;
}
const TokenContext = createContext<TokenContextProps | undefined>(undefined);
export default function TokenContextProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | undefined>();
  const [userId, setUserId] = useState<string | undefined>();

  const value: TokenContextProps = {
    token,
    userId,
    setToken,
    setUserId,
  };

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
}


export function useTokenContext() {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("This hook must be used inside a TokenContextProvider!");
  }
  return context;
}
