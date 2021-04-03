import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles/upload-two-style.js";

export function UploadTwo() {
  return (
    <View style={styles.backgroundUpload}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Upload</Text>
        <TouchableOpacity>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.uploadContainer}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.uploadMainText}>
          Post your media if you are satisfied or go back to make changes.
        </Text>

        <Image
          source={require("../img/upload.png")}
          style={styles.uploadImage}
        />
      </View>
    </View>
  );
}
