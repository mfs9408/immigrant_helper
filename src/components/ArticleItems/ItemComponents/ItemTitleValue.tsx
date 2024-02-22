import React from "react";
import { Text, View } from "react-native";
import { commonStyles } from "../../../theme";
import { TitleValueTextProperty } from "../../../types/articleInterface";

const ItemTitleValue = ({ title, value }: TitleValueTextProperty) => {
  return (
    <View style={[commonStyles.articlePartWrapper, commonStyles.marginBottom5]}>
      <Text style={[commonStyles.p2]}>
        <Text style={commonStyles.h4}>{title}: </Text>
        {value}
      </Text>
    </View>
  );
};

export default ItemTitleValue;
