import React, { useContext } from "react";
import { ContextStore } from "../StoreProvider/StoreProvider";
import dictionary, { AllowedProperty } from "../../localizationDictionary";

interface LocalizedPropertyProps {
  propertyName: AllowedProperty;
}

const LocalizedProperty = ({ propertyName }: LocalizedPropertyProps) => {
  const { language } = useContext(ContextStore);
  const property = dictionary[language][propertyName];

  if (!property) return null;
  if (typeof property === "string") return <>{property}</>;

  return property;
};

export default LocalizedProperty;
