import React, { useCallback } from "react";
import { Linking, Text, View } from "react-native";
import { commonColors, commonStyles } from "../../../theme";
import { TitleValueTextProperty } from "../../../types/types";

const ItemTitleValue = ({ title, value, url }: TitleValueTextProperty) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url || "");

    if (supported) {
      return await Linking.openURL(url as string);
    } else {
      return null;
      // Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View style={[commonStyles.articlePartWrapper, commonStyles.marginBottom5]}>
      <Text style={[commonStyles.p2]}>
        {title && <Text style={commonStyles.h4}>{title}: </Text>}
        <Text
          onPress={handlePress}
          style={[(url && commonColors.linkColor) || {}]}
        >
          {value}
        </Text>
      </Text>
    </View>
  );
};

export default ItemTitleValue;
