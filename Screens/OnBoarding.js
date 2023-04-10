import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import COLORS from "../assets/COLORS";

// const Dots = ({selected}) => {

//   let backgroundColor = selected ? COLORS.primary : COLORS.secondary;

//   return (
//       <View
//           style={[styles.dot, backgroundColor]}
//       />
//   );
// }

const Skip = ({ ...props }) => (
  <TouchableOpacity style={styles.buttonMargin} {...props}>
    <Text style={styles.TextSize}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={styles.buttonMargin} {...props}>
    <Text style={{ fontSize: 16, color: COLORS.primary }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={styles.buttonMargin} {...props}>
    <Text style={{ fontSize: 16, color: COLORS.primary }}>Done</Text>
  </TouchableOpacity>
);

export default function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("Intro")}
      onDone={() => navigation.navigate("Intro")}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      // DotComponent={Dots}

      pages={[
        {
          backgroundColor: COLORS.white,
          image: <Image source={require("../assets/illustration.png")} />,
          title: "Keeper free trial courses",
          subtitle: "Free courses for you to find your way learning",
        },

        {
          backgroundColor: COLORS.white,
          image: <Image source={require("../assets/illustration2.png")} />,
          title: "Quick and easy learning",
          subtitle:
            "Easy and fast learning at any time to help you improve various skills",
        },

        {
          backgroundColor: COLORS.white,
          image: <Image source={require("../assets/illustration3.png")} />,
          title: "Create your own study plan",
          subtitle:
            "Study according to the study plan, make study more motivated",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    marginHorizontal: 3,
  },

  buttonMargin: {
    marginHorizontal: 10,
  },

  TextSize: {
    fontSize: 16,
  },
});
