import React from "react";
import ItemText from "./ItemComponents/ItemText";
import ItemImage from "./ItemComponents/ItemImage";
import ItemMap from "./ItemComponents/ItemMap";
import {
  DataProperty,
  ImageProperty,
  MapProperty,
  CommonTextProperty,
  TitleValueTextProperty,
} from "../../types/articleInterface";
import ItemTextSubheader from "./ItemComponents/ItemTextSubheader";
import ItemTitleValue from "./ItemComponents/ItemTitleValue";
import { EItemType } from "../../enums";

const GetItem = (item: DataProperty) => {
  switch (item.type) {
    case EItemType.TEXT:
      return <ItemText {...(item as CommonTextProperty)} />;
    case EItemType.TEXT_SUBHEADER:
      return <ItemTextSubheader {...(item as CommonTextProperty)} />;
    case EItemType.TEXT_TITLE_VALUE:
      return <ItemTitleValue {...(item as TitleValueTextProperty)} />;
    case EItemType.IMAGE:
      return <ItemImage {...(item as ImageProperty)} />;
    case EItemType.MAP:
      return <ItemMap {...(item as MapProperty)} />;
  }
};

export default GetItem;
