import * as React from "react";
import {Image, Text, View, SafeAreaView } from "react-native";
import axios from "axios";

const Details1 = ({ route, navigation }: any) => {
    const { input } = route.params
    const { useLayoutEffect, useState } = React;
    const [WrongCountry, setwrongCountryError] = useState(false);
    const [Details, setCountryDetail] = useState({
        "id":"", "name" :"", "nasa_jpl_url":"https://" , "is_potentially_hazardous_asteroid":""
    })

    useLayoutEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/neo/${input}?api_key=LtfTvRmByg5FTA3b1r4NuRfVJCSUQcYk3Z0Xz7Zs')
            .then((response) => {
                setCountryDetail(response.data[0])
            })
            .catch((error) => {
                setwrongCountryError(true)
            })
    }, [])
    return (
        <SafeAreaView style={{flex: 1, width: "90%", alignSelf: "center"}}>

        <Text style={{fontSize:20,padding:15,marginTop:20, alignSelf: "center"}}>id : {Details?.id}</Text>

        <Text style={{fontSize:20,padding:15, alignSelf: "center"}}>name : {Details?.name}</Text>

        <Text style={{fontSize:20,padding:15, alignSelf: "center"}}>nasa_jpl_url : {Details?.nasa_jpl_url}</Text>

        <Text style={{fontSize:20,padding:15, alignSelf: "center"}}>is_potentially_hazardous_asteroid : {Details?.is_potentially_hazardous_asteroid.toString() } </Text>
    
    </SafeAreaView>
    );
};
export default Details1;
