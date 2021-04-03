import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundSplash: {
    flex: null,
    width: "100%",
    backgroundColor: "rgb(221, 244, 244)",
  },
  elephantImage: {
    paddingVertical: 28,
    marginHorizontal: 137,
    height: 124,
    width: 138,
    marginTop: 45,
  },
  titleText: {
    fontSize: 80,
    fontFamily: "Baskerville-Italic",
    fontWeight: "bold",
    color: "silver",
    textAlign: "center",
    letterSpacing: 0.0,
    paddingVertical: 65,
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 0.0,
    marginBottom: 22,
  },
  starIcon: {
    color: "rgb(245, 221, 221)",
    height: 195,
    width: 170,
    fontSize: 170,
    alignSelf: "center",
  },
  heartIcon: {
    color: "black",
    height: 85,
    width: 100,
    fontSize: 90,
    alignSelf: "center",
    position: "absolute",
    top: 50,
    left: 160,
  },
  buttonContainer: {
    backgroundColor: "rgb(245, 221, 221)",
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 36,
    marginVertical: 82,
    marginHorizontal: 36,
    alignItems: "center",
  },
  buttonContainerText: {
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 0.0,
  },
});
