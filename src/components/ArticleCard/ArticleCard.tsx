import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { commonColors, commonStyles } from "../../theme";
import { EPage } from "../../enums";

interface ArticleCardProps {
  id: string;
  image: string;
  tag: string;
  header: string;
}

const ArticleCard = ({ id, header, tag, image }: ArticleCardProps) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(EPage.ARTICLE_DESCRIPTION, { id })}
      style={styles.pressable}
    >
      <View style={[styles.cardContainer, commonStyles.boxShadow]}>
        <Image source={image as any} style={styles.image} />
        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(0,0,0,0.55)", "rgba(0,0,0,1)"]}
          locations={[0, 0.67, 1]}
          style={styles.linearGradient}
        >
          <View style={[styles.tag, commonStyles.boxShadow]}>
            <Text style={{ color: commonColors.secondary.color }}>{tag}</Text>
          </View>
          <Text style={[commonStyles.h4, commonColors.whiteColor]}>{header}</Text>
        </LinearGradient>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    marginTop: 20,
  },
  cardContainer: {
    borderRadius: 20,
    height: 200,
  },
  image: {
    height: 200,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    borderRadius: 20,
  },
  linearGradient: {
    height: "100%",
    padding: 20,
    zIndex: 3,
    justifyContent: "space-between",
    borderRadius: 20,
  },
  tag: {
    backgroundColor: commonColors.third.color,
    padding: 5,
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: commonColors.secondary.color,
    shadowOffset: { width: 0, height: 3 },
  },
});

export default ArticleCard;
