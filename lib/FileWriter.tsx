import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Encoding } from "rn-fetch-blob";
/**
 * ? Local Imports
 */
import styles from "./FileWriter.style";
import { writeFile } from "./utils";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IFileWriterProps {
  style?: CustomStyleProp;
  encoding?: Encoding;
  data: any;
  filename: string;
  fileExtension: string;
  enableDecycle?: boolean;
  enableStringify?: boolean;
  onPress: (path: string) => void;
}

const FileWriter: React.FC<IFileWriterProps> = ({
  style,
  data,
  filename,
  fileExtension,
  encoding,
  enableDecycle,
  enableStringify,
  onPress,
}) => {
  const handlePress = () => {
    writeFile(
      data,
      filename,
      fileExtension,
      encoding,
      enableDecycle,
      enableStringify,
    )
      .then((path: string) => {
        onPress && onPress(path);
      })
      .catch((err) => {
        onPress && onPress(err);
      });
  };

  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: ScreenWidth * 0.9,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#132853",
        borderWidth: 2,
        borderRadius: 12,
      }}
      onPress={handlePress}
    >
      <Text style={{ color: "#132853", fontSize: 16, fontWeight: "500" }}>
        File Writer: Export Given Data
      </Text>
    </TouchableOpacity>
  );
};

export default FileWriter;
