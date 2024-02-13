import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { commonStyles } from "../../theme";
import ArticleCard from "../../components/ArticleCard";
import { ARTICLES } from "../../const";

const ArticlesPage = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView style={commonStyles.commonWrapper}>
        {ARTICLES.map((item) => (
          <ArticleCard key={item.id} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticlesPage;
