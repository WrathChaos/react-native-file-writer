import React from "react";
import { Alert, SafeAreaView } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import FileWriter, { IDataType } from "react-native-file-writer";

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

const mockArrData: IDataType[] = [
  {
    data: {
      name: "FreakyCoder",
      email: "kurayogun@gmail.com",
      github: "https://github.com/WrathChaos",
    },
    filename: "freakycoder2",
    fileExtension: "json",
    enableStringify: true,
    enableDecycle: true,
  },
  {
    data: {
      name: "Kuray",
      email: "kurayogun@gmail.com",
      github: "https://github.com/WrathChaos",
    },
    filename: "kuray",
    fileExtension: "json",
    enableStringify: true,
    enableDecycle: true,
  },
  {
    data: {
      name: "Test JSON",
      email: "kurayogun@gmail.com",
      github: "https://github.com/WrathChaos",
    },
    filename: "test-hello",
    fileExtension: "json",
    enableStringify: true,
    enableDecycle: true,
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
        data={mockArrData}
        filename="freakycoder"
        fileExtension="json"
        enableStringify
        enableDecycle
        onPress={(path: string | string[]) => {
          alert(path);
          // showFileManager(path);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
