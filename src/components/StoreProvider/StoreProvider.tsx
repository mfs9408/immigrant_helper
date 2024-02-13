import {
  createContext,
  PropsWithChildren,
  Dispatch,
  useState,
  SetStateAction,
} from "react";
import { AllowedLocale } from "../../types/allowedLocale";
import { ELanguage } from "../../enums";

interface OtherProps {}
type ContextProps = PropsWithChildren<OtherProps>;

export const ContextStore = createContext<any>(null);

const StoreProvider = ({ children }: ContextProps) => {
  const [language, setLanguage] = useState<AllowedLocale>(ELanguage.RU);

  return (
    <ContextStore.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default StoreProvider;
