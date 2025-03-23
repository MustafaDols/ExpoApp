import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button, TextInput } from "react-native";
import Sidebar from "../components/Sidebar";

const initialData = [
  { id: 1, text: "lemon", selected: false },
  { id: 2, text: "mango", selected: false },
  { id: 3, text: "icon", selected: false },
];

export default function HomeScreen() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to delete an item by id
  const deleteItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  // Function to add new item from search input
  const addItem = () => {
    if (searchQuery.trim() !== "") {
      const newItem = { id: Date.now(), text: searchQuery, selected: false };
      setData([...data, newItem]);
      setSearchQuery(""); // Clear input after adding
    }
  };

  // Function to toggle item selection
  const toggleItemSelection = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        {/* Search Input and Add Button in a row */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter text..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Button title="Add Item" onPress={addItem} />
        </View>

        <ScrollView>
          {data.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <TouchableOpacity onPress={() => deleteItem(item.id)}>
                <View style={styles.item}>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.selectionBox, item.selected && styles.selectedBox]}
                onPress={() => toggleItemSelection(item.id)}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  selectionBox: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 5,
    marginLeft: 10,
  },
  selectedBox: {
    backgroundColor: "blue",
  },
});