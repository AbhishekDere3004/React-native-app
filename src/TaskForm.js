import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Background from './Background';


const TaskForm = ({ onAddTask, onDeleteTask,navigation }) => { // Include onDeleteTask prop
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

  const handleAddTask = () => {
    if (title.trim() === '') {
      alert('Please enter a title for the task.');
      return;
    }

    // Create a new task
    const newTask = {
      title,
      description,
      completed,
    };

  
    onAddTask(newTask);

   
    setTitle('');
    setDescription('');
    setCompleted(false);
  };
  const handleDeleteTask = () => {
 
    onDeleteTask();
  };

  const handleViewTasks = () => {
  
    navigation.navigate('ViewTasks', { tasks });
  };

  return (
    <Background>
    <View style={styles.container}>
      <Text style={styles.header}>Add Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <Button title="Delete Task" onPress={handleDeleteTask} color="red" />
      <Button title="View Tasks" onPress={handleViewTasks} />
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default TaskForm;
