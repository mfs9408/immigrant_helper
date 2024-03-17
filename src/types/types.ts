import { EItemType } from "../enums";

export interface CommonDataProperties {
  articles: ArticlesProperty[];
  converters: ConverterTypes[];
}

export interface ConverterTypes {
  coefficient: number;
  firstText: string;
  secondText: string;
  comparison: string;
}

export type ArticlesProperty = {
  id: string;
  image: any;
  tag: string;
  header: string;
  data: DataProperty[];
};

export type DataProperty =
  | CommonTextProperty
  | ImageProperty
  | MapProperty
  | TitleValueTextProperty;

export interface TitleValueTextProperty extends CommonTextProperty {
  title: string;
  url?: string;
}

export interface CommonTextProperty {
  type: EItemType;
  value: string;
  additional?: unknown;
}

export interface ImageProperty {
  type: EItemType;
  value?: any;
  comment?: string;
}

export interface MapProperty {
  type: EItemType;
  markers: {
    name: string;
    address: string;
    img: any;
    coordinate: {
      latitude: number;
      longitude: number;
    };
  }[];
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

export type AllowedLocale = "ru" | "en";
