import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Button,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import dateFormat from "dateformat";
import MatchesList from "../components/MatchesList";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function MainScreen() {
  const [postData, setPostData] = useState([]);

  const getPostsData = () => {
    axios
      .get("http://10.0.2.2:3000/posts/")
      .then((response) => {
        setPostData(response.data);
      })
      .catch((err) => console.log("ERR>>> ", err));
  };

  useEffect(() => {
    getPostsData();
  }, []);

  const TopOfPage = () => {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: "#FFF",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "95%",
            backgroundColor: "#AAA",
            height: 75,
            marginVertical: 10,
          }}
        >
          <Text>Common Ground Top Banner</Text>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#AAA",
            height: 50,
          }}
        >
          <Text>Write a post box</Text>
        </View>
        <MatchesList />
      </View>
    );
  };

  const PostItem = (props) => {
    const { item } = props;

    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 10,
          borderBottomColor: "#EAEAEA",
          borderBottomWidth: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 6,
              flexDirection: "row",
              padding: 10,
            }}
          >
            <Image
              style={{
                width: 35,
                height: 35,
                borderRadius: 25,
              }}
              source={{
                uri: "http://10.0.2.2:3000/images" + item.user.imageURL,
              }}
            />
            <View style={{ marginLeft: 5 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#184139",
                }}
              >
                {item.user.username}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                {dateFormat(new Date(item.createdDate), "d mmm yyyy h.MM tt")}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 10,
              alignItems: "flex-end",
            }}
          >
            <MaterialCommunityIcon
              name="dots-vertical"
              size={20}
              color="#000"
            />
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Text style={{ fontSize: 12, paddingLeft: 10 }}>{item.text}</Text>
        </View>
        {item.imageURL && (
          <View
            style={{
              width: "100%",
              padding: 10,
            }}
          >
            <Image
              style={{
                width: "100%",
                aspectRatio: 1,
              }}
              source={{
                uri: "http://10.0.2.2:3000/images" + item.imageURL,
              }}
            />
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              padding: 10,
              flexDirection: "row",
            }}
          >
            <FontAwesomeIcon name="heart-o" size={18} color="#000" />
            <Text style={{ marginLeft: 5 }}>{item.likesCount} likes</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
              padding: 10,
              flexDirection: "row",
            }}
          >
            <FontAwesomeIcon name="comment-o" size={18} color="#000" />
            <Text style={{ marginLeft: 5 }}>{item.commentsCount} comments</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Text>Top Nav</Text>
      </View>
      <FlatList
        data={postData}
        renderItem={({ item }) => {
          return <PostItem item={item} />;
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={TopOfPage}
      />
      <View style={styles.navBar}>
        <Text>Bottom Nav</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainScrollView: {
    width: "100%",
    backgroundColor: "#fff",
  },
  appBar: {
    width: "100%",
    height: 55,
    backgroundColor: "#F8CF63",
  },
  navBar: {
    width: "100%",
    height: 55,
    backgroundColor: "#FFF",
    borderTopColor: "#F1F1F1",
    borderTopWidth: 3,
  },
  testBlocks: {
    height: 300,
    width: "100%",
    backgroundColor: "red",
    marginVertical: 10,
  },
});
