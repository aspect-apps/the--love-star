import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundProfile: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgb(245, 221, 221)",
    paddingHorizontal: 11,
  },

  chatLinkText: {
    color: "blue",
    textAlign: "left",
    letterSpacing: 0.0,
    fontSize: 18,
  },
  followerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginTop: 12,
    marginVertical: 20,
  },
  followersText: {
    color: "rgb(71, 71, 71)",
    letterSpacing: 0.0,
    fontSize: 14,
    fontWeight: "bold",
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
  },
  profileIcon: {
    width: 200,
    height: 200,
    borderRadius: 475,
    backgroundColor: "rgb(196, 196, 196)",
    marginVertical: 35,
  },
  followButton: {
    borderRadius: 15,
    backgroundColor: "rgb(221, 244, 244)",
    paddingVertical: 15,
    paddingHorizontal: 36,
    marginVertical: 27,
    alignSelf: "flex-end",
  },
  followButtonText: {
    fontSize: 18,
    color: "white",
    letterSpacing: 0.0,
    textAlign: "center",
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
    marginVertical: 4,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
    borderRadius: 8,
  },
});
