import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Profiles } from '../../App/Themes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class NavigationBar extends React.Component {
  render() {
    return (        
      <View style={styles.container}>
        <FontAwesome5 name={'cog'} size={ 30 } reverse/> 
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={require('../../App/Images/tinder-logo.png')} style={styles.image} />
        </TouchableOpacity>
        <FontAwesome5 name={'comments'} solid size={ 30 }/>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain' 
  },
});

