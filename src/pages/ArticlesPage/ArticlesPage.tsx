import React, { useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Skeleton from "../../components/Skeleton";
import { commonStyles } from "../../theme";
import ArticleCard from "../../components/ArticleCard";
import { ContextStore } from "../../components/StoreProvider/StoreProvider";

const ArticlesPage = () => {
  const { isLoading, data } = useContext(ContextStore);

  if (isLoading) return <Skeleton />;

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView
        style={[commonStyles.commonWrapper]}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {data.articles.map((item) => (
          <ArticleCard key={item.id} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticlesPage;
