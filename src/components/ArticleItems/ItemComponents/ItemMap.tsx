import React from "react";
import MapView from "react-native-maps";
import { MapProperty } from "../../../types/articleInterface";

const ItemMap = ({ initialRegion }: MapProperty) => {
  return (
    <MapView style={{ height: 200 }} initialRegion={initialRegion}>
      {/*{markers.map((marker) => {*/}
      {/*  <Marker*/}
      {/*    coordinate={{*/}
      {/*      latitude: 40.58960851426045,*/}
      {/*      longitude: -73.94589078045342,*/}
      {/*    }}*/}
      {/*  />;*/}
      {/*})}*/}
    </MapView>
  );
};

export default ItemMap;
