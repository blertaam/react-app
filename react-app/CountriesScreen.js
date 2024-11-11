import React from "react";
import {View, Text, Flatlist, Stylesheet} from 'react-native'
import data from './data/countries.json'

class CountriesScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount(){
        this.setState({
            countries: data
        })
    }
    render(){
        return(
            <View>
                <Text style={Stylesheet.screenTitle}>Countries Screen</Text>
                <Flatlist data={this.state.countries}
                keyExtractor={countries => countries.id}
                renderItem={({item}) => (
                  <View style={styles.cardWrapper}>
                    <Text>City Name: {item.name}</Text>
                    <Text>Country Name: {item.country}</Text>
                    <Text>City Description: {item.description}</Text>
                  </View>
                  )}
               > </Flatlist>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
});

export default CountriesScreen;