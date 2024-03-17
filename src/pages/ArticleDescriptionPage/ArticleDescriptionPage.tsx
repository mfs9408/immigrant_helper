import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { ContextStore } from "../../components/StoreProvider/StoreProvider";
import { RoutePropsProps } from "../../types/navigateTypes";
import getItem from "../../components/ArticleItems/getItem";
import { useRoute } from "@react-navigation/native";
import { commonColors, commonStyles } from "../../theme";
import { ArticlesProperty } from "../../types/types";
import { EPage } from "../../enums";

const ArticleDescriptionPage = () => {
  const { data } = useContext(ContextStore);
  const [state, setState] = useState<ArticlesProperty>(null);
  const route = useRoute<RoutePropsProps<EPage.ARTICLE_DESCRIPTION>>();
  const id = route.params.id;

  useEffect(() => {
    const article = data.articles.find((item) => item.id === id);
    setState(article);
  }, []);

  if (!state) return <Text>Article is not found</Text>;

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
