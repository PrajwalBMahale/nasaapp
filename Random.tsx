import * as React from "react";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

const Random = ({ route, navigation }: any) => {
    // const { input } = route.params
    const { useLayoutEffect, useState } = React;
    const [ Error, setError ] = useState(false);
    const [Details, setDetail] = useState({
        "id":"", "name" :"", "nasa_jpl_url":"https://" , "is_potentially_hazardous_asteroid":""
    })

    useLayoutEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=leBDTcrPIrYlQHtFhaaTIAE0krtYECqCy4rdedAp')
            .then((response) => { 
                 const arrId = response.data.near_earth_objects;
                 const randomid = arrId[Math.floor(Math.random()*arrId.length)]
                 console.log(randomid)
                
                setDetail(randomid)
             })
            .catch((error) => {
                setError(true) 
            })
    }, [])
    return (
        <SafeAreaView style={{flex: 1, width: "90%", alignSelf: "center"}}>

        <Text style={{fontSize:20,padding:15,marginTop:20, alignSelf: "center"}}>id : {Details?.id}</Text>

        <Text style={{fontSize:20,padding:15, alignSelf: "center"}}>name : {Details?.name}</Text>

        <Text style={{fontSize:20,padding:15, alignSelf: "center"}}>nasa_jpl_url : {Details?.nasa_jpl_url}</Text>

        <Text style={{fontSize:20,padding:15, alignSelf: "center"}}>is_potentially_hazardous_asteroid : {Details?.is_potentially_hazardous_asteroid.toString() }  </Text>
       
    </SafeAreaView>
    );
};
export default Random;