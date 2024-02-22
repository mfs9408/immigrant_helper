import React from "react";
import { Text, View } from "react-native";
import { commonStyles } from "../../../theme";
import { CommonTextProperty } from "../../../types/articleInterface";

const ItemText = ({ value }: CommonTextProperty) => (
  <View
    style={[
      commonStyles.articlePartWrapper,
      commonStyles.marginBottom10,
      { paddingTop: 0 },
    ]}
  >
    <Text style={commonStyles.p2}>{value}</Text>
  </View>
);

export default ItemText;
