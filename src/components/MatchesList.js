import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  Pressable,
} from "react-native";
import axios from "axios";

export default function MatchesList() {
  const [matchData, setMatchData] = useState([]);

  const getMatchesData = () => {
    axios
      .get("http://10.0.2.2:3000/matches/1/")
      .then((response) => {
        console.log("RESP>>> ", response.data);
        setMatchData(response.data);
      })
      .catch((err) => console.log("ERR>>> ", err));
  };

  useEffect(() => {
    getMatchesData();
  }, []);

  return (
    <View
      style={{
        width: "95%",
        backgroundColor: "#CC00CC",
        marginVertical: 10,
        height: 220,
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#F1F1F1",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 3, paddingLeft: 6 }}>
          <Text style={{ fontSize: 18, paddingTop: 3, fontWeight: "bold" }}>
            Social Matches
          </Text>
          <Text style={{ fontSize: 12, paddingBottom: 3 }}>
            Make quick connections.
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
        >
          <Text style={{ fontSize: 12, paddingRight: 10 }}>See All</Text>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={matchData}
        style={{ marginTop: 5 }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 130,
                height: 160,
                backgroundColor: "#FFF",
                marginHorizontal: 5,
                flex: 1,
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              <Image
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 25,
                }}
                source={{
                  uri: "http://10.0.2.2:3000/images" + item.matchee.imageURL,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: "#7AB47E",
                  marginTop: 2,
                }}
              >
                {item.percentage}% Match
              </Text>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", marginTop: 2 }}
                numberOfLines={1}
              >
                {item.matchee.username}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  marginTop: 2,
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.matchee.organization}
              </Text>
              <Pressable
                onPress={() => {}}
                style={{
                  backgroundColor: "#184139",
                  width: "100%",
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <Text
                  style={{ color: "#FFF", fontSize: 11, marginVertical: 2 }}
                >
                  Follow
                </Text>
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
