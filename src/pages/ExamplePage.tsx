import React, { useState } from "react";
import { Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const ExamplePage = () => {
  const [mapRegion, setMapRegion] = useState<any>({
    latitude: 40.58960851426045,
    longitude: -73.94589078045342,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <MapView style={{ height: "100%" }} region={mapRegion}>
      <Marker
        coordinate={{
          latitude: 40.58960851426045,
          longitude: -73.94589078045342,
        }}
      >
        <Image
          source={{ uri: "https://placekitten.com/g/200/300" }}
          style={{ height: 50, width: 50, borderRadius: 50 }}
        />
      </Marker>
    </MapView>
  );
};

export default ExamplePage;
