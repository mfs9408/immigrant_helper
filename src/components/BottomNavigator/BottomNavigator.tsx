import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import ConverterPage from "../../pages/ConverterPage";
import { EPage } from "../../enums";
import ArticlesPage from "../../pages/ArticlesPage";
import { commonColors, commonStyles } from "../../theme";
import { commonTabScreenProperties } from "./const";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={EPage.ARTICLE}
        component={ArticlesPage}
        options={{
          title: "Полезные статьи",
          ...commonTabScreenProperties,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="article"
              color={focused ? color : commonColors.secondary.color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name={EPage.CONVERTER}
        component={ConverterPage}
        options={{
          title: "Конвертер",
          ...commonTabScreenProperties,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="change-circle"
              color={focused ? color : commonColors.secondary.color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
