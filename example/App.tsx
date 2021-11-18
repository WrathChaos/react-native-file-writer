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
  const showFileManager = (path: string) => {
    Alert.alert(
      "React Native File Writer",
      "File is exported successfully, do you want to open it?", // <- this part is optional, you can pass an empty string
      [
        {
          text: "OK",
          onPress: () => {
            RNFetchBlob.android.actionViewIntent(path, "application/json");
          },
        },
        {
          text: "Cancel",
          onPress: () => {},
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <FileWriter
        data={mockData}
        filename="freakycoder"
        fileExtension="json"
        enableStringify
        enableDecycle
        onPress={(path: string) => {
          showFileManager(path);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
