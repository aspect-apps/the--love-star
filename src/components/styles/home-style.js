import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    alignContent: "center",
    flex: 1,
    paddingVertical: 21,
  },
  imageContainer: {
    borderRadius: 5,
    backgroundColor: "rgb(245, 221, 221)",
    paddingVertical: 18,
    paddingBottom: 196,
    marginHorizontal: 12,
    marginVertical: 19,
  },
  profileIcon: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    backgroundColor: "white",
    marginHorizontal: 19,
  },
  container: {
    flex: 1,
  },
  containerGallery: {
    flex: 1,
  },
  containerImage: {
    width: "32%",
    marginHorizontal: 4,
    alignSelf: "center",
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
});
