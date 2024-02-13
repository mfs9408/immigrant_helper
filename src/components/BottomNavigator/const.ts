import { commonColors, commonStyles } from "../../theme";

export const commonTabScreenProperties = {
  tabBarInactiveTintColor: commonColors.secondary.color,
  tabBarActiveTintColor: commonColors.primary.color,
  headerTitleStyle: {
    ...commonStyles.h3,
    color: commonColors.primary.color,
  },
};
