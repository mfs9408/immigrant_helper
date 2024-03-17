import React from "react";
import { View } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";
import { commonColors, commonStyles } from "../../theme";

const Skeleton = () => {
  return (
    <View
      style={[
        commonStyles.commonWrapper,
        { height: "100%", paddingVertical: 20 },
      ]}
    >
      <ContentLoader
        speed={1}
        height={200}
        backgroundColor={commonColors.third.color}
        foregroundColor={commonColors.primary.color}
        style={commonStyles.marginBottom20}
      >
        <Rect x="0" y="0" rx="20" ry="20" width="100%" height="200" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        height={200}
        backgroundColor={commonColors.third.color}
        foregroundColor={commonColors.primary.color}
      >
        <Rect x="0" y="0" rx="20" ry="20" width="100%" height="200" />
      </ContentLoader>
    </View>
  );
};

export default Skeleton;
