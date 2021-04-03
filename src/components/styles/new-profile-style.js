import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundProfile: {
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
    bottom: 46,
  },
  chatLinkText: {
    color: "blue",
    textAlign: "left",
    letterSpacing: 0.0,
    fontSize: 18,
    top: 23,
    right: 291,
  },
  profileContainer: {
    alignItems: "center",
  },
  profileText: {
    color: "rgb(36, 52, 67)",
    letterSpacing: 0.0,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    top: 39,
  },
  profileIcon: {
    width: 200,
    height: 200,
    borderRadius: 475,
    backgroundColor: "white",
    top: 100,
  },
});
