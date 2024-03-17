import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import TextField from "../TextField";
import { commonColors, commonStyles } from "../../theme";
import { ConverterTypes } from "../../types/types";

const Converter = ({
  coefficient,
  comparison,
  firstText,
  secondText,
}: ConverterTypes) => {
  const [firstField, setFirstField] = useState<string>("");
  const [secondField, setSecondValue] = useState<string>("");

  const onFirstFieldChange = (value: string) => {
    const replacedSignString = value.replace(",", ".");
    setFirstField(replacedSignString);

    const numberValue = Number(replacedSignString);

    if (!numberValue) return setSecondValue("");

    setSecondValue(String((numberValue * coefficient).toFixed(2)));
  };

  const onSecondValueChanged = (value: string) => {
    const replacedSignString = value.replace(",", ".");
    setSecondValue(replacedSignString);

    const numberValue = Number(replacedSignString);

    if (!numberValue) return setFirstField("");

    setFirstField(String((numberValue / coefficient).toFixed(2)));
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.containerHeader}>
        <Text
          style={[commonStyles.h2, commonColors.primary, styles.marginRight15]}
        >
          {firstText}
        </Text>
        <MaterialIcons
          name="swap-horiz"
          size={35}
          color="black"
          style={[styles.marginRight15, commonColors.primary]}
        />
        <Text style={[commonStyles.h2, commonColors.primary]}>
          {secondText}
        </Text>
      </View>
      <View>
        <Text style={[commonStyles.p1, commonStyles.marginBottom10]}>
          {comparison}
        </Text>
      </View>
      <View style={[styles.textFieldContainer, styles.firstField]}>
        <TextField
          value={firstField}
          onChange={onFirstFieldChange}
          placeholder={firstText}
          numeric
        />
        <Text style={[commonStyles.h3, commonColors.whiteColor]}>
          {firstText}
        </Text>
      </View>
      <View style={styles.middleIcon}>
        <MaterialIcons
          name="swap-vert"
          size={25}
          color={commonColors.whiteColor.color}
        />
      </View>
      <View style={[styles.textFieldContainer, styles.secondField]}>
        <TextField
          value={secondField}
          onChange={onSecondValueChanged}
          placeholder={secondText}
          numeric
        />
        <View>
          <Text style={[commonStyles.h3, commonColors.whiteColor]}>
            {secondText}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    position: "relative",
    marginBottom: 30,
    backgroundColor: "rgba(51,51,51, 0.05)",
    borderRadius: 20,
    padding: 20,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  marginRight15: {
    marginRight: 15,
  },
  textFieldContainer: {
    marginBottom: 10,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  firstField: {
    backgroundColor: commonColors.primary.color,
  },
  secondField: {
    backgroundColor: commonColors.additionalColor.color,
  },
  middleIcon: {
    position: "absolute",
    top: "60%",
    left: "50%",
    zIndex: 100,
    backgroundColor: "#98A53A",
    padding: 7,
    borderRadius: 50,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export default Converter;
