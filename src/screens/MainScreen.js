import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const vertFlatListData = Array(6)
  .fill("x")
  .map((item, index) => {
    return {
      id: `item-${index}`,
      content: `${index}`,
    };
  });

export default function MainScreen() {
  const TopOfPage = () => {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: "#B5B5B5",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "95%",
            backgroundColor: "#CC00CC",
            height: 75,
            marginVertical: 10,
          }}
        >
          <Text>Common Ground Top Banner</Text>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#CC00CC",
            height: 50,
            marginVertical: 10,
          }}
        >
          <Text>Write a post box</Text>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#CC00CC",
            marginVertical: 10,
            height: 160,
          }}
        >
          <Text>Social Matches</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={vertFlatListData}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: 100,
                    height: 130,
                    backgroundColor: "#FFF",
                    marginHorizontal: 5,
                  }}
                >
                  <Text style={{ fontSize: 50, paddingLeft: 10 }}>
                    {item.content}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Text>Top Nav</Text>
      </View>
      {/* <ScrollView style={styles.mainScrollView}>
        {Array(20)
          .fill("x")
          .map((item, index) => {
            return (
              <View key={index} style={styles.testBlocks}>
                <Text style={{ fontSize: 50, paddingLeft: 10 }}>{index}</Text>
              </View>
            );
          })}
        <Text>HELLO WORLD!!</Text>
      </ScrollView> */}
      <FlatList
        data={vertFlatListData}
        renderItem={({ item }) => {
          return (
            <View style={styles.testBlocks}>
              <Text style={{ fontSize: 50, paddingLeft: 10 }}>
                {item.content}
              </Text>
            </View>
          );
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
