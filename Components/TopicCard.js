import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TopicCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { props.children }
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
      width: 150,
      height: 160,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
      //paddingLeft: 16,
      //paddingRight: 14,

    },
    cardContent: {
      marginHorizontal: 5,
      marginVertical: 5,
      
    }
  });



  /*const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    mainCardView: {
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.white,
      borderRadius: 15,
      shadowColor: Colors.shadow,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
    },
    subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: Colors.history_back,
      borderColor: Colors.color_eeeeee,
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });   */
  