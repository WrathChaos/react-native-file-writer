import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { Encoding } from "rn-fetch-blob";
/**
 * ? Local Imports
 */
import styles from "./FileWriter.style";
import { writeFile } from "./utils";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface IDataType {
  data: any;
  filename: string;
  fileExtension: string;
  enableDecycle?: boolean;
  enableStringify?: boolean;
  encoding?: Encoding;
}

interface IFileWriterProps {
  style?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  encoding?: Encoding;
  TouchableComponent?: any;
  data: any | IDataType[];
  filename: string;
  fileExtension: string;
  enableDecycle?: boolean;
  enableStringify?: boolean;
  onPress: (path: string | string[]) => void;
}

const FileWriter: React.FC<IFileWriterProps> = ({
  style,
  data,
  filename,
  fileExtension,
  encoding,
  enableDecycle,
  enableStringify,
  textStyle,
  children,
  TouchableComponent = TouchableOpacity,
  onPress,
}) => {
  const handlePress = async () => {
    let writtenPaths: string[] = [];
    // ? Multiple File Writing
    if (data as IDataType[]) {
      for (let item of data) {
        await writeFile(
          item.data,
          item.filename,
          item.fileExtension,
          item.encoding,
          item.enableDecycle,
          item.enableStringify,
        )
          .then((path: string) => {
            writtenPaths.push(path);
          })
          .catch((err) => {
            onPress && onPress(err);
          });
      }
      onPress && onPress(writtenPaths);
    } else {
      // ? Single File Writing
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
    }
  };

  const DefaultTextChild = () => (
    <Text style={[styles.textStyle, textStyle]}>
      File Writer: Export Given Data
    </Text>
  );

  return (
    <TouchableComponent style={[styles.container, style]} onPress={handlePress}>
      {children || <DefaultTextChild />}
    </TouchableComponent>
  );
};

export default FileWriter;
