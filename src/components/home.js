import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles/home-style.js";

const imageData = [
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
];

// export function Home() {
//   return (

//     <View style={styles.homeContainer}>

//     <View style={styles.imageContainer}>
//       <View style={styles.profileIcon}></View>
//     </View>
//     <View style={styles.imageContainer}>
//     <View style={styles.profileIcon}></View>
//     </View>
//     </View>

//   )
// }

export function Home() {
  return (
    <View style={styles.homeContainer}>
      <FlatList
        numColumns={1}
        horizontal={false}
        data={imageData}
        ListHeaderComponent={
          <>
            <View style={styles.imageContainer}>
              <View style={styles.profileIcon}></View>
            </View>
            <View style={styles.imageContainer}>
              <View style={styles.profileIcon}></View>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.containerImage}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        )}
      />
    </View>
  );
}
