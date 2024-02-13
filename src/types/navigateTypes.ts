import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  mainPage: undefined;
  converterPage: undefined;
  articleDescriptionPage: undefined;
  // articleDescriptionPage: { id: string | undefined };
};

export type RoutePropsProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>["route"];
