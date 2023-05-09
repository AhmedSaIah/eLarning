import React, {useState,useEffect} from 'react';
import { View , StyleSheet, ScrollView,StatusBar,TouchableOpacity,Text, SliderComponent} from 'react-native';


import COLORS from '../assets/COLORS';
import CourseCard from "../Components/CourseCard";

import {getItem} from '../Firebase/collection';

export default function Courses(){

    const [color1, setColor1] = useState (COLORS.primary);
    const [color2, setColor2] = useState (COLORS.black);
    const [color3, setColor3] = useState (COLORS.black);
    const [color4, setColor4] = useState (COLORS.black);


    async function getCourse(courseName){
        const CourseItem = await getItem(courseName);
        CourseItem.map((a, index) => 
            console.log(index)
        )
        setItem(CourseItem);
    }
          
    useEffect(() => {
        getCourse('CS');
    }, []);
 
    const [Items, setItem] = useState([]);

    async function csOnPress (){
        await getCourse('CS');
        setColor1(COLORS.primary);
        setColor2(COLORS.black);
        setColor3(COLORS.black);
        setColor4(COLORS.black);
    }

    async function designonPress (){
        console.log("before");
        await getCourse('Design');
        console.log("after");
        setColor1(COLORS.black);
        setColor2(COLORS.primary);
        setColor3(COLORS.black);
        setColor4(COLORS.black);
    }

    async function marketingonPress (){
        await getCourse('Marketing');
        setColor1(COLORS.black);
        setColor2(COLORS.black);
        setColor3(COLORS.primary);
        setColor4(COLORS.black);
    }

    async function businessonPress (){
        await getCourse('Business');
        setColor1(COLORS.black);
        setColor2(COLORS.black);
        setColor3(COLORS.black);
        setColor4(COLORS.primary);
    }
    
   
    return(

        <View>
            <View style = {styles.header}>
                {/* Searchbar */}
            </View>

            <View style = {{flexDirection : 'row', justifyContent : 'space-around', margin : 10}}>
                <TouchableOpacity onPress={() => csOnPress()}>
                    <Text style = {{color : color1}}>CS</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => designonPress()}>
                    <Text style = {{color : color2}}>Design</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity onPress={() => marketingonPress()}>
                    <Text style = {{color : color3}}>Marketing</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => businessonPress()}>
                    <Text style = {{color : color4}}>Business</Text>
                </TouchableOpacity>
            </View>

            {Items.map((a, index) => (
                <ScrollView key={index}>
                    
                    <CourseCard id = {a.id}
                    label = {a.name} 
                    image = {a.image} 
                    duration ={a.duration}
                    byWho = {a.byWho}
                    action = {() =>{}}
                    />
            
                </ScrollView>

          ))}

            <StatusBar style="auto"/>
          </View>        
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
        backgroundColor: COLORS.primary,
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal : 35,
      },

      
})