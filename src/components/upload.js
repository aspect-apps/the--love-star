import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles/upload-style.js";

export function Upload() {
  return (
    <View style={styles.backgroundUpload}>
      <View style={styles.uploadContainer}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.uploadMainText}>Photos</Text>
        <TouchableOpacity>
          <View style={styles.uploadBoxContainer}>
            <Text style={styles.uploadBoxText}>Tap to upload photo</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../img/upload.png")}
          style={styles.uploadImage}
        />
        <TouchableOpacity>
          <Text style={styles.bottomText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
