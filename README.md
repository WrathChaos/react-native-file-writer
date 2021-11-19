<img alt="React Native File Writer" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-file-writer)

[![React Native File Writer](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-file-writer)

[![npm version](https://img.shields.io/npm/v/react-native-file-writer.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-file-writer)
[![npm](https://img.shields.io/npm/dt/react-native-file-writer.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-file-writer)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native File Writer"
        src="assets/Screenshots/react-native-file-writer.gif" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-file-writer
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"rn-fetch-blob": ">= 0.12.0"
```

## RN Fetch Blob Dependency Installation Install

Since this little util library depends on the `rn-fetch-blob` please follow their [installation process](https://github.com/joltup/rn-fetch-blob#user-content-installation)

# Usage

## Import

```jsx
import FileWriter from "react-native-file-writer";
```

## Fundamental Usage

`enableStringify` and `enableDecycle` are optional parameters. Please check more for `Configuration - Props` section.
Also, this `FileWriter` default button is fully customizable. You can create your own button.

```jsx
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
```

## Multiple File Writing Usage

You should follow the `IDataType` type for the multiple file writing/exporting. The usage will be the same. It should return the all written file paths as an array.

```jsx
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
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property      |  Type  |  Default  | Description                                          |
| ------------- | :----: | :-------: | ---------------------------------------------------- |
| data          |  any   | undefined | set your own data to write/export it on file         |
| filename      | string | undefined | set the filename for the file                        |
| fileExtension | string | undefined | set the file extenstion for the file such as `.json` |
| buttonText    | string | undefined | set the button's text                                |

## Customization (Optionals)

| Property           |   Type    |  Default  | Description                                                                                  |
| ------------------ | :-------: | :-------: | -------------------------------------------------------------------------------------------- |
| enableStringify    |  boolean  |   false   | it will automatically stringify the data before write it on the file                         |
| enableDecycle      |  boolean  |   false   | it will automatically decycling the data before the stringify the data                       |
| onPress            | function  | undefined | set your own logic for the button functionality when it is pressed for export/write the file |
| encoding           | Encoding  |   utf-8   | you should change it if your data type is not using utf-8                                    |
| style              | ViewStyle |  default  | set or override the style object for the main container                                      |
| textStyle          | TextStyle |  default  | set or override the style object for the button text style                                   |
| TouchableComponent |   Text    |  default  | set your own component instead of default react-native's `Text` component                    |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# FAQ

### How to show the written/exported file on file manager?

`RNFetchBlob.android.actionViewIntent(path, "application/json");` will show it to the user. You should check the path first.

```jsx
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
```

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native File Writer is available under the MIT license. See the LICENSE file for more info.
