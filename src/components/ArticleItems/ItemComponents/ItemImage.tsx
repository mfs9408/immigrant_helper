import React from "react";
import { Image, Text, View } from "react-native";
import { commonColors, commonStyles } from "../../../theme";
import { ImageProperty } from "../../../types/articleInterface";

const ItemImage = ({ comment, value }: ImageProperty) => {
  return (
    <View style={commonStyles.marginBottom10}>
      <Image
        source={value as any}
        style={{
          height: 200,
          width: "100%",
          zIndex: 1,
        }}
      />
      <View style={{ marginHorizontal: 20 }}>
        <Text style={commonColors.third}>{comment}</Text>
      </View>
    </View>
  );
};

export default ItemImage;
