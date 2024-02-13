import React from "react";
import { Text, View } from "react-native";
import { commonStyles } from "../../../theme";
import { TextProperty } from "../../../const";

const ItemText = ({ value }: TextProperty) => (
  <View style={[commonStyles.commonWrapper, commonStyles.marginBottom10]}>
    <Text style={commonStyles.p2}>{value}</Text>
  </View>
);

export default ItemText;
