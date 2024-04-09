import React, { useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { ContextStore } from "../../components/StoreProvider/StoreProvider";
import ArticleCard from "../../components/ArticleCard";
import Skeleton from "../../components/Skeleton";
import { commonStyles } from "../../theme";

const ArticlesPage = () => {
  const { isLoading, articles } = useContext(ContextStore);

  if (isLoading) return <Skeleton />;

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView
        style={[commonStyles.commonWrapper]}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {articles.map((item) => (
          <ArticleCard key={item.id} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticlesPage;
