import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import LoginScreen from "./LoginScreen";

export default function Splashcreen(){
    const[showLogin, setShowLogin] =useState(false);

    useEffect(() =>{
        setShowLogin(true);
    }, 3000); //3 seconds
    
    return() => clearTimeout(timer);
},[]);




