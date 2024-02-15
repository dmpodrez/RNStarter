import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Header from "./components/header";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function addList() {
    console.log(input);
    setList([...list, input]);
    setInput("");
  }
  function removeList(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  return (
    <View>
      <Header />
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          paddingTop: 20,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <TextInput
          style={styles.input1}
          placeholder=" Write here"
          value={input}
          onChangeText={setInput}
        />
        <Button title="Add" onPress={addList} />
      </View>
      <View style={styles.list}>
        {list.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.item_text}>{item}</Text>
            <Button title="Del" onPress={() => removeList(index)} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input1: {
    fontSize: 20,
    borderColor: "silver",
    borderWidth: 2,
    width: 250,
  },
  list: {
    display: "flex",
    alignItems: "center",
    paddingTop: 50,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#bab8b3",
  },
  item_text: {
    fontSize: 20,
    paddingRight: 10,
  },
});
