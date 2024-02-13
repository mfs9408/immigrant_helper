import React, { ReactElement } from "react";
import { AllowedLocale } from "./types/allowedLocale";

type LocalizationList = Record<AllowedProperty, string | ReactElement>;

export type AllowedProperty = "converter";

type LocalizedDictionary = Record<AllowedLocale, LocalizationList>;

export default {
  ru: {
    converter: "Конвертер",
  },
  en: {
    converter: "Converter",
  },
} as LocalizedDictionary;
