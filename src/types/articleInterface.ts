import { EItemType } from "../enums";

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
  markers: [];
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}
