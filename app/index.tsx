import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";


const Index = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={Logo} style={{ height: 24, width: 24 }} /> */}
      <Text style={{ fontSize: 32 }}>
        index.......................................
      </Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
