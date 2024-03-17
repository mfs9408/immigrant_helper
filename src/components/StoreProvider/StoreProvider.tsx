import { createContext, PropsWithChildren, useState } from "react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { DEFAULT_DATA } from "../../dataSource/CommonData";
import { AllowedLocale, CommonDataProperties } from "../../types/types";
import { ELanguage } from "../../enums";

interface OtherProps {}
type ContextProps = PropsWithChildren<OtherProps>;

interface ContextProperties {
  isLoading: boolean;
  setIsLoading?: (value: boolean) => void;
  language: AllowedLocale;
  setLanguage?: (value: AllowedLocale) => void;
  fetchData: () => void;
  data: CommonDataProperties;
}

const mock = new MockAdapter(axios);

// const mock = new MockAdapter(axios, {
//   active: process.env.NODE_ENV === 'development'
// });

mock.onGet("https://example.com/data").reply(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, DEFAULT_DATA]);
    }, 2000);
  });
});

export const ContextStore = createContext<ContextProperties | null>(null);

const StoreProvider = ({ children }: ContextProps) => {
  const [language, setLanguage] = useState<AllowedLocale>(ELanguage.RU);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<CommonDataProperties>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://example.com/data");
      await setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Request failed:", error.message);
      setData(DEFAULT_DATA);
    }
  };

  return (
    <ContextStore.Provider
      value={{
        language,
        setLanguage,
        isLoading,
        setIsLoading,
        fetchData,
        data,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default StoreProvider;
