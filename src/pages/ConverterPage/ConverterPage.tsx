import React, { useContext } from "react";
import {  ScrollView } from "react-native";
import Keyboard from "../../components/Keyboard";
import { ContextStore } from "../../components/StoreProvider/StoreProvider";
import { ELanguage } from "../../enums";
import Converter from "../../components/Converter";
import { ConverterTypes } from "../../types";
// import LocalizedProperty from "../../components/LocalizedProperty";

const CONVERTERS: ConverterTypes[] = [
  {
    coefficient: 2.205,
    firstText: "Kg",
    secondText: "Lb",
    comparison: "1 kg ~ 2.2 lb",
  },
  {
    coefficient: 35.195,
    firstText: "Liter",
    secondText: "Oz",
    comparison: "1 liter ~ 35.2 oz",
  },
  {
    coefficient: 1.609,
    firstText: "Mile",
    secondText: "Km",
    comparison: "1 mile ~ 1.6 km",
  },
];

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
  // const { language, setLanguage } = useContext(ContextStore);

  return (
    <Keyboard>
      <ScrollView
        style={[
          { height: "100%", paddingVertical: 20, backgroundColor: "#fff" },
        ]}
      >
        {CONVERTERS.map((item, key) => (
          <Converter key={key} {...item} />
        ))}
        {/*<Text style={[commonColors.primary, commonStyles.h2]}>*/}
        {/*  <LocalizedProperty propertyName="converter" />*/}
        {/*</Text>*/}

        {/*<View*/}
        {/*  style={{*/}
        {/*    borderWidth: 1,*/}
        {/*    borderColor: commonColors.primary.color,*/}
        {/*    borderRadius: 10,*/}
        {/*    padding: 20,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <TextField value={kg} onChange={kgChanged} placeholder="kg" />*/}
        {/*  <TextField value={lb} onChange={lbChanged} placeholder="lb" />*/}
        {/*</View>*/}
        {/*<Select value={language} items={LANGUAGES} onValueChange={setLanguage} />*/}
        {/*<Text>{language}</Text>*/}
      </ScrollView>
    </Keyboard>
  );
};

export default ConverterPage;
