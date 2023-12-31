import {
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { styles } from "../themes";
import { useNavigation } from "@react-navigation/native";
import { fallbackMoviePoster, image185 } from "../api/moviedb";

const { width, height } = Dimensions.get("window");

export default function MovieList({ title, data, hideSeeAll }) {
  const navigation = useNavigation();

  let movieName = "Ant-Man and the Wasp: Quantiunania";

  return (
    <View style={{ marginBottom: 8, marginVertical: 10 }}>
      <View
        style={{
          marginBottom: 20,
          marginHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          {title}
        </Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={[styles.text, { fontSize: 20 }]}>See All</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* Movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push("Movie", item)}
            >
              <View style={{ marginVertical: 2, marginRight: 10 }}>
                <Image
                  // source={require("../../assets/images/moviePoster2.png")}

                  source={{ uri: image185(item.poster_path) || fallbackMoviePoster }}
                  style={{
                    borderRadius: 24,
                    width: width * 0.33,
                    height: height * 0.22,
                  }}
                />
                <Text style={{ color: "rgb(212, 212, 212)" }}>
                  {item.title && item.title.length > 14
                    ? item.title.slice(0, 14) + "..."
                    : item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
