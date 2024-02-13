import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ContextStore } from "../../components/StoreProvider/StoreProvider";
import TextField from "../../components/TextField";
import { commonStyles } from "../../theme";
import Select from "../../components/Select";
import { ELanguage } from "../../enums";
import LocalizedProperty from "../../components/LocalizedProperty";

const LANGUAGES = [
  {
    value: ELanguage.RU,
    label: "RU",
  },
  {
    value: ELanguage.EN,
    label: "EN",
  },
];

const ConverterPage = () => {
  const { language, setLanguage } = useContext(ContextStore);

  const [kg, setKg] = useState<number>(0);
  const [lb, setLb] = useState<number>(0);

  const kgChanged = (kg: number) => {
    setKg(kg);
    setLb(Number(kg) * 2.205);
  };

  const lbChanged = (lb: number) => {
    setLb(Number(lb));
    setKg(Number(lb) / 2.205);
  };

  return (
    <View style={commonStyles.commonWrapper}>
      <Text>
        <LocalizedProperty propertyName="converter" />
      </Text>
      <TextField value={kg} onChange={kgChanged} placeholder="kg" />
      <TextField value={lb} onChange={lbChanged} placeholder="lb" />
      <Select value={language} items={LANGUAGES} onValueChange={setLanguage} />
      <Text>{language}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConverterPage;