import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clear = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
      <View style={styles.button}>
      <Button 
        title="add"
        onPress={add}
      />

      <Button 
        title="clear"
        onPress={clear}
      />
      </View >
      <Text style={styles.text}>Shopping list: </Text>

      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item, index) => 
          index.toString()}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    flexDirection:'row', 
  },
  input: {
    marginTop: 70,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  list: {

  },
  text:{
    color: "purple",
    marginTop: 20
  }
});
