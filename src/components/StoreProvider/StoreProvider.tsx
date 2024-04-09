import {createContext, PropsWithChildren, useState} from "react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
    ARTICLES,
    CONVERTERS,
} from "../../dataSource/CommonData";
import {
    AllowedLocale,
    ArticlesProperty,
    ConverterTypes,
} from "../../types/types";
import {ECities, ELanguage} from "../../enums";

interface OtherProps {
}

type ContextProps = PropsWithChildren<OtherProps>;

interface ContextProperties {
    isLoading: boolean;
    setIsLoading?: (value: boolean) => void;
    language: AllowedLocale;
    setLanguage?: (value: AllowedLocale) => void;
    fetchData?: () => void;
    articles: ArticlesProperty[];
    converterData: ConverterTypes[];
}

const mock = new MockAdapter(axios);

// const mock = new MockAdapter(axios, {
//   active: process.env.NODE_ENV === 'development'
// });

// mock.onGet("https://example.com/data").reply(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([200, DEFAULT_DATA]);
//         }, 2000);
//     });
// });

export const ContextStore = createContext<ContextProperties | null>(null);

const StoreProvider = ({children}: ContextProps) => {
    const [language, setLanguage] = useState<AllowedLocale>(ELanguage.RU);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [articles, setArticles] = useState<ArticlesProperty[]>(ARTICLES);
    const [converterData, setConverterData] =
        useState<ConverterTypes[]>(CONVERTERS);
    const [currentCity, setCurrentCity] = useState(ECities.NEW_YORK);

    // const fetchData = async () => {
    //     try {
    //         setIsLoading(true);
    //         const response = await axios.get("https://example.com/data");
    //         await setArticles(response.data.articles);
    //         await setConverterData(response.data.converterData);
    //     } catch (error) {
    //         await axios.post("https://example.com/error", {
    //             error: error.message,
    //             title: "При запросе статей что то пошло не так",
    //         });
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    return (
        <ContextStore.Provider
            value={{
                language,
                setLanguage,
                isLoading,
                setIsLoading,
                // fetchData,
                converterData,
                articles,
            }}
        >
            {children}
        </ContextStore.Provider>
    );
};

export default StoreProvider;
