/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import TextInputField from './Components/TextInput';

const App = () => {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTodoList([...todoList, todo]);
    setTodo(null);
  };

  const completeTask = index => {
    let itemList = [...todoList];
    itemList.splice(index, 1);
    setTodoList(itemList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* header  */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerStyle}>To-do List</Text>
        </View>
        {/* add to-do  */}
        <View style={styles.fieldBox}>
          <TextInputField
            onChangeText={text => setTodo(text)}
            value={todo}
            placeholder="Add to-do"
            keyboardType="keypad"
          />
          <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/* boxes  */}
        {todoList.length ? (
          todoList.map((item, index) => (
            <View style={styles.boxStyle} key={index}>
              <Text style={styles.boxText}>{item}</Text>
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Text style={styles.delete}>x</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[styles.headerStyle, {fontSize: 20}]}>
              No task available
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  boxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  boxText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
    paddingVertical: 6,
    paddingLeft: 5,
  },
  addButton: {
    marginLeft: 10,
    // padding: 5,
    backgroundColor: 'green',
    borderRadius: 4,
    width: '19.5%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 20,
    fontWeight: '500',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  fieldBox: {
    paddingVertical: 50,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  delete: {
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
  },
});

export default App;
