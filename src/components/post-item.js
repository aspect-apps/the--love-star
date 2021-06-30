import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles/main-feed-style';
import { ProfileImage } from './profile-image';
import { useNavigation } from '@react-navigation/native';

export function PostItem({ item }) {
  const navigation = useNavigation();
  // const starImgFilled =
  //   'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  // const starImgCorner =
  //   'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
  // const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  // const [defaultRating, setDefaultRating] = useState(2);
  // const CustomRatingBar = () => {
  //   return (
  //     <View style={styles.customRatingBarStyle}>
  //       {maxRating.map((item, key) => {
  //         return (
  //           <TouchableOpacity
  //             activeOpacity={0.7}
  //             key={item}
  //             onPress={() => setDefaultRating(item)}>
  //             <Image
  //               style={styles.starImgStyle}
  //               source={
  //                 item <= defaultRating
  //                   ? {uri: starImgFilled}
  //                   : {uri: starImgCorner}
  //               }
  //             />
  //           </TouchableOpacity>
  //         );
  //       })}
  //     </View>
  //   );
  // };
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: item.imageUrl }}
        style={styles.cardImage}
      />

      <View style={styles.cardHeader}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('RatingPage', {
              postId: item.id,
              image: item.imageUrl,
            })
          }>
          <Text style={styles.cardTitle}>{item.addTitle}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ForeignUserProfile', {
              postId: item.id,
              photoUrl: item.photoUrl,
              uid: item.userId,
              displayName: item.displayName,
            })
          }>
          <ProfileImage size={40} url={item.photoUrl} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContent}>
        <Text>{item.inputCaption}</Text>
        {/* <CustomRatingBar url={item.photoUrl} /> */}
        <Image source={{ uri: item.imageUrl }} />
        {/* <Text style={styles.textStyle}>
          {defaultRating + ' / ' + maxRating.length}
        </Text> */}
      </View>
    </View>
  );
}
