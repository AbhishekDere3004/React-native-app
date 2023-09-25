import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Background from './Background';
const ViewTasks = ({ tasks }) => {
  return (
<Background>
       <View style={styles.container}>
      <Text style={styles.header}>Task List</Text>
      <ScrollView>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskItem}>
            <Text>{task.title}</Text>
            <Text>{task.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
    </Background>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  taskItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});

export default ViewTasks;
