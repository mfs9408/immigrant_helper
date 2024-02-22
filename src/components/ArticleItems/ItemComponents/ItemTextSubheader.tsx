import React from "react";
import { Text, View } from "react-native";
import { commonStyles, commonColors } from "../../../theme";
import { CommonTextProperty } from "../../../types/articleInterface";

const ItemTextSubheader = ({ value }: CommonTextProperty) => {
  return (
    <View
      style={[
        commonStyles.articlePartWrapper,
        commonStyles.marginBottom10,
        commonStyles.marginTop15,
      ]}
    >
      <Text style={[commonStyles.h3, commonColors.primary]}>{value}</Text>
    </View>
  );
};

export default ItemTextSubheader;
