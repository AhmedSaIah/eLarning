import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View , ScrollView, SafeAreaView} from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
import GButton from '../Components/GButton';
import COLORS from '../assets/COLORS';
import { Headline, Title } from 'react-native-paper';

export default function VideoPage() {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

  return (
    <View style={styles.container}>
      <Headline>Lecture 1</Headline>
      <Video
        ref={secondVideo}
        style={styles.video}
        source={require("./aa.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <GButton buttonColor = {COLORS.primary} textColor={COLORS.white} title="Play from 50s" onPress={() => secondVideo.current.playFromPositionAsync(500)} />
        <GButton buttonColor = {COLORS.primary} textColor={COLORS.white} title={statusSecondVideo.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)} />
      </View>

      <Video
        ref={secondVideo}
        style={styles.video}
        source={require("./bb.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatusSecondVideo}
      />
      <View style={styles.buttons}>
        <GButton buttonColor = {COLORS.primary} textColor={COLORS.white} title="Play from 50s" onPress={() => secondVideo.current.playFromPositionAsync(50000)} />
        <GButton buttonColor = {COLORS.primary} textColor={COLORS.white} title={statusSecondVideo.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)} />
      </View>
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
    marginTop: 40
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16 ,
    borderRadius: 20, 
   },
});
