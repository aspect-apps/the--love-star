import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundOnboarding: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgb(245, 221, 221)",
  },
  headerContainer: {
    backgroundColor: "rgb(221, 244, 244)",
    width: 420,
    height: 113,
    paddingVertical: 25,
    paddingHorizontal: 4,
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
    bottom: 7,
  },
  onboardingContainer: {
    alignItems: "center",
    paddingVertical: 14,
  },
  mainText: {
    fontSize: 30,
    letterSpacing: 0.0,
    top: 87,
    textAlign: "center",
    fontWeight: "bold",
  },
  subText: {
    fontSize: 18,
    letterSpacing: 0.0,
    textAlign: "center",
    paddingHorizontal: 51,
    paddingVertical: 123,
  },
  buttonContainer: {
    backgroundColor: "rgb(221, 244, 244)",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 71,
    marginVertical: 82,
    marginHorizontal: 36,
    alignItems: "center",
    bottom: 29,
  },
  buttonContainerText: {
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 0.0,
  },
  bottomText: {
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 0.0,
    bottom: 88,
  },
});
