import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ImageBackground,
} from "react-native";

const index = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const handleAddTask = () => {
        if (task) {
            if (editIndex !== -1) {
                // Edit existing task
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = task;
                setTasks(updatedTasks);
                setEditIndex(-1);
            } else {
                // Add new task
                setTasks([...tasks, task]);
            }
            setTask("");
        }
    };

    const handleEditTask = (index) => {
        const taskToEdit = tasks[index];
        setTask(taskToEdit);
        setEditIndex(index);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.task}>
            <Text style={styles.itemList}>{item}</Text>
            <View style={styles.taskButtons}>
                <TouchableOpacity onPress={() => handleEditTask(index)}>
                    <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                    <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <ImageBackground
            source={require('../../../assets/green-curtain2.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.heading}>PlainGreen</Text>
                <Text style={styles.title}>ToDo App</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter task"
                    placeholderTextColor="white" // Set placeholder text color to white
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                    <Text style={styles.addButtonText}>
                        {editIndex !== -1 ? "Update Task" : "Add Task"}
                    </Text>
                </TouchableOpacity>
                <FlatList
                    data={tasks}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover", // Ensures the image covers the entire screen
    },
    container: {
        flex: 1,
        padding: 40,
        marginTop: 40,
        borderRadius: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: 'white',
    },
    heading: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 7,
        color: "green",
        textAlign: "center",
    },
    input: {
        borderWidth: 3,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 25,
        color: 'white',

    },
    addButton: {
        backgroundColor: "green",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        fontSize: 25,
    },
    itemList: {
        fontSize: 25,
        color: 'white',
    },
    taskButtons: {
        flexDirection: "row",
    },
    editButton: {
        marginRight: 10,
        color: "green",
        fontWeight: "bold",
        fontSize: 20,
    },
    deleteButton: {
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
    },
});

export default index;
