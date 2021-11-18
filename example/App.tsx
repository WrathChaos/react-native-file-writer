import React from "react";
import { Alert, SafeAreaView } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import FileWriter from "./lib/FileWriter";

const mockData = [
  {
    name: "FreakyCoder",
    email: "kurayogun@gmail.com",
    github: "https://github.com/WrathChaos",
  },
  {
    name: "Kuray",
    email: "kurayogun@gmail.com",
    github: "https://github.com/WrathChaos",
  },
  {
    name: "Test JSON",
    email: "kurayogun@gmail.com",
    github: "https://github.com/WrathChaos",
  },
];

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <FileWriter
        data={mockData}
        filename="freakycoder123"
        fileExtension="json"
        enableStringify
        enableDecycle
        onPress={(path: string) => {
          Alert.alert("FileWriter", path);
          RNFetchBlob.android.actionViewIntent(path, "application/json");
        }}
      />
    </SafeAreaView>
  );
};

export default App;
