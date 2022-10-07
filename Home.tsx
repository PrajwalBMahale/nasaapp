import * as  React from "react";
import { View, Text } from "react-native";
import { TextInput, Button} from 'react-native-paper';

const Home = ({ navigation }: any) => {
    const { useState, useRef } = React;
    const [input, setinput] = useState("")
    const [minValueError, setMinValueError] = useState(true)

    const errorRef = useRef(false)

    const handleButtonPress = () => {
        navigation.push('Details1', { input })
    }

    const handleButtonPress1 = () => {
        navigation.push('Random')
    }

    const handleChange = (value: string) => {
        if (value.length < 0) {
            setMinValueError(true)
            errorRef.current = true;
        }
        else {
            setMinValueError(false)
            errorRef.current = false;
        }
        setinput(value)
    }

     return (
        
        <View style={{flex: 1, justifyContent: "center", width: "40%", alignSelf: "center"}}>
      <TextInput
      label="Enter Asteroid id"
      value={input}
      onChangeText={handleChange}
      mode="outlined"
    />

    <Button disabled={minValueError} style={{backgroundColor:"#6600ff", marginTop:45, borderRadius:5, width:200, justifyContent: "center", alignSelf: "center"}}
     mode="contained" onPress={handleButtonPress}>
    Random Asteroid
  </Button>
  <Button disabled={minValueError} style={{backgroundColor:"#6600ff", marginTop:45, borderRadius:5, width:100, justifyContent: "center", alignSelf: "center"}}
     mode="contained" onPress={handleButtonPress1}>
     Submit
  </Button>
    </View>
    );
};

export default Home;