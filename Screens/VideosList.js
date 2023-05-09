import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList , Image , TouchableOpacity} from 'react-native';
import CourseCard from '../Components/CourseCard.js';

let course = [
  {
    number: "01",
    title: "Welcome to the course",
    time: "10   mins",
    icon: require("../assets/button-play.png"),
    key: "1",
  },
  {
    number: "02",
    title: "Welcome to the course",
    time: "10   mins",
    icon: require("../assets/button-play.png"),
    key: "2",
  },
  {
    number: "03",
    title: "Welcome to the course",
    time: "10   mins",
    icon: require("../assets/button-play.png"),
    key: "3",
  },
  {
    number: "04",
    title: "Welcome to the course",
    time: "10   mins",
    icon: require("../assets/button-play.png"),
    key: "4",
  },
  {
    number: "05",
    title: "Welcome to the course",
    time: "10   mins",
    icon: require("../assets/button-play.png"),
    key: "5",
  },
  {
    number: "06",
    title: "Welcome to the course",
    time: "10   mins",
    icon: require("../assets/button-play.png"),
    key: "6",
  },
  {
    number: "07",
    title: "Welcome to the course",
    time: "10   mins",
    icon: require("../assets/button-play.png"),
    key: "7",
  },
  {
    number: "08",
    title: "Welcome to the course",
    time: "10   mins",
    icon: require("../assets/button-play.png"),
    key: "8",
  },
];

let oneCard = ({ item }) => (
  <TouchableOpacity onPress={() => pressHandler1(item.key)}>
    <CourseCard>
      <View style={styles.container1}>
        <Text style={styles.number}>{item.number}</Text>

        <View style={styles.container2}>
          <Text style={styles.text2}>{item.title}</Text>
          <Text style={styles.text3}>{item.time}</Text>
        </View>
        <TouchableOpacity onPress={() => pressHandler2(item.key)}>
          <Image sourse={item.icon} style={styles.image2} />
        </TouchableOpacity>
      </View>
    </CourseCard>
  </TouchableOpacity>
);

let pressHandler1 = (key) => {
  console.log("hello");
  // هخليها بالنفيجيشن تروح لصفحة تانية
};
let pressHandler2 = (key) => {
  
  <Image sourse={require("../assets/Button.png")} style={styles.image3} />;
};
let pressHandler3 = () => {
  console.log("hello");
  // هخليها بالنفيجيشن تروح لصفحة تانية
};

export default function VideosList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Course List</Text>
        <TouchableOpacity onPress={() => pressHandler3()}>
          <View>
            <Image
              sourse={require("../assets/icon5.png")}
              style={styles.image1}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        <FlatList data={course} renderItem={oneCard} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#f2f2f2",
  },
  container1: {
    flexDirection: "row",
  },
  container2: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    backgroundColor: "#3D5CFF",
    height: 90,
  },

  number: {
    color: "#b3b3b3",
    fontSize: 30,
    
    marginLeft: 0,
    marginTop: 0,
  },

  text1: {
    fontSize: 20,
    fontFamily: 'Papyrus',
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 25,
  },
  text2: {
    fontSize: 17,
    color: "black",
    marginTop: 2,
    marginLeft: 9,
  },
  text3: {
    fontSize: 10,
    color: "#3D5CFF",
    marginTop: 3,
    marginLeft: 9,
  },

  image1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 0.5,
    marginLeft: 165,
    marginTop: 25,
  },
  image2: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderColor: "gray",
    borderWidth: 0.5,
    marginTop: 3,
    marginLeft: 20,
  },
  image3: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderColor: "coral",
    borderWidth: 0.5,
    marginTop: 3,
    marginLeft: 20,
  },

  list: {
    flex: 1,
    marginTop:10,
    marginBottom:10,
  },
});
