import {StyleSheet,Text,View,Image,ScrollView, TouchableOpacity} from "react-native";
import COLORS from "../assets/COLORS";

  export default function CourseCard({ id, image, label, duration,byWho,action}) {
    return (
      <TouchableOpacity style={styles.content} onPress = {action}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 7 }}>
            
            <View style={styles.footer}>
              <Image source={{ uri: image }} style={styles.image} />
              <View style={styles.header}>
              <Text style={styles.label}>{label}</Text>
                <Text style={styles.label2}>{byWho}</Text>
                <Text style={styles.duration}>{duration}</Text>
              </View>
            </View>
            <Text style ={{color : COLORS.primary, fontWeight:'bold',fontSize:16, textAlign: 'right'}}>Free</Text>
          </View>
  
        </ScrollView>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    content: {
      backgroundColor: "#FFF",
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#f7eceb",
      shadowColor: "#000",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      padding: 7,
      marginVertical: 10,
      marginHorizontal: 10,
    },
    image: {
      width: "30%",
      height: 100,
      alignItems: "center",
    },
    header: {
      flexDirection: "column",
      width : "100%"
    },
    
    label: {
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 15,
      marginRight: 20,
      width : "75%"
    },
    label2: {
      marginLeft: 15,
      textAlign: "left",
      fontSize: 14,
      fontWeight: "bold",
      color: COLORS.black,
    },
  
    duration: {
      width: "75%",
      fontSize: 14,
      fontWeight: "bold",
      paddingHorizontal: 7,
      marginHorizontal: 7,
      color : COLORS.orange
    },
    footer: {
      marginTop: 15,
      flexDirection: "row",
    },
  });