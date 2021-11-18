import { ViewStyle, TextStyle, Dimensions, StyleSheet } from "react-native";

const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 50,
    width: ScreenWidth * 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#132853",
    borderWidth: 2,
    borderRadius: 12,
  },
  textStyle: {
    color: "#132853",
    fontSize: 16,
    fontWeight: "500",
  },
});
