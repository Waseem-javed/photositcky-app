import { Image, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const screenWidth = Dimensions.get("window").width; // Get the width of the screen
  const imageWidth = screenWidth - 32;

  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return (
    <Image
      source={imageSource}
      style={{
        width: imageWidth,
        height: hp("70%"),
        borderRadius: 18,
        backgroundColor: "red",
      }}
    />
  );
}
