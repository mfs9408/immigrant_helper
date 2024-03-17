import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { RootStackParamList } from "../../types/navigateTypes";
import ArticleDescriptionPage from "../../pages/ArticleDescriptionPage";
import BottomNavigator from "../BottomNavigator";
import { commonColors, fonts } from "../../theme";
import { EPage } from "../../enums";
import { ContextStore } from "../StoreProvider/StoreProvider";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const [fontsLoaded] = useFonts(fonts);
  const { fetchData } = useContext(ContextStore);

  useEffect(() => {
    fetchData();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute={EPage.MAIN}>
        <Stack.Screen
          name={EPage.MAIN}
          component={BottomNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={EPage.ARTICLE_DESCRIPTION}
          component={ArticleDescriptionPage}
          options={{
            title: null,
            headerBackTitleVisible: false,
            headerTitle: "Статья",
            headerTintColor: commonColors.primary.color,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
