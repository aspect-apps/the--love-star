import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundUpload: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgb(245, 221, 221)",
    paddingHorizontal: 11,
  },
  headerContainer: {
    backgroundColor: "rgb(221, 244, 244)",
    width: 420,
    height: 113,
    paddingVertical: 25,
    paddingHorizontal: 16,
    alignItems: "flex-end",
    right: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.0,
    width: 297,
    height: 66,
    marginLeft: 59,
    marginTop: 22,
    marginRight: 45,
    bottom: 12,
  },
  uploadContainer: {
    alignItems: "center",
  },
  dividerLine: {
    backgroundColor: "black",
    height: 1,
    width: 400,
    top: 27,
  },
  uploadMainText: {
    fontSize: 24,
    letterSpacing: 0.0,
    alignSelf: "flex-start",
    top: 81,
  },
  uploadBoxContainer: {
    height: 180,
    width: 333,
    backgroundColor: "white",
    top: 123,
  },
  uploadBoxText: {
    fontSize: 24,
    letterSpacing: 0.0,
    textAlign: "center",
    top: 72,
  },
  uploadImage: {
    height: 157,
    width: 190,
    top: 170,
  },
  bottomText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    letterSpacing: 0.0,
    top: 220,
  },
});
