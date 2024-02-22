import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ARTICLES } from "../../articleSource/ARTICLES";
import { RoutePropsProps } from "../../types/navigateTypes";
import getItem from "../../components/ArticleItems/getItem";
import { ArticlesProperty } from "../../types/articleInterface";
import { EPage } from "../../enums";
import { commonColors, commonStyles } from "../../theme";

const ArticleDescriptionPage = () => {
  const [state, setState] = useState<ArticlesProperty>(null);
  const route = useRoute<RoutePropsProps<EPage.ARTICLE_DESCRIPTION>>();
  const id = route.params.id;

  useEffect(() => {
    const data = ARTICLES.find((item) => item.id === id);
    setState(data);
  }, []);

  if (!state) return null;

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView
        style={[commonStyles.commonWrapper, { paddingHorizontal: 0 }]}
        contentContainerStyle={{
          paddingVertical: 20,
        }}
      >
        <View
          style={[commonStyles.articlePartWrapper, commonStyles.marginBottom20]}
        >
          <Text style={[commonStyles.h1, commonColors.primary]}>
            {state.header}
          </Text>
        </View>
        {state.data.map((item, key) => (
          <View key={key}>{getItem(item)}</View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleDescriptionPage;
