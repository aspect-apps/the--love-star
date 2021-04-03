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
  },
  iconContainer: {
    marginRight: 320.1,
    top: 45,
  },
  mainText: {
    fontSize: 48,
    letterSpacing: 0.0,
    top: 18,
    textAlign: "center",
  },
  subText: {
    fontSize: 20,
    letterSpacing: 0.0,
    bottom: 2,
    alignSelf: "flex-start",
    fontWeight: "bold",
    left: 105,
  },
  subSubText: {
    fontSize: 16,
    letterSpacing: 0.0,
    top: 10,
    paddingHorizontal: 80,
    left: 23,
  },
  dividerLine: {
    backgroundColor: "black",
    height: 1,
    width: 322,
    top: 27,
  },
  buttonContainer: {
    backgroundColor: "rgb(221, 244, 244)",
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 126,
    marginVertical: 30,
    marginHorizontal: 36,
    alignItems: "center",
  },
  buttonContainerText: {
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 0.0,
  },
});
