import { RootStackParamList } from "../src/types/navigateTypes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
