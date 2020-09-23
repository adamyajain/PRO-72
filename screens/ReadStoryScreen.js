import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <View styles={styles.container}>
                <Header
                backgroundColor={'#00edb1'}
                centerComponent={{
                    text: 'Story Hub',
                    style: { color:'#4a3135',
                fontsize:20 },
                }} /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})