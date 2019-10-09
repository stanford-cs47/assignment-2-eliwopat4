import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Images, Profiles } from '../../App/Themes';

export default class ButtonButtons extends React.Component {
  
  Clicked() {
    console.log("Clicked")
  }
 
  render() {
    return (        
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => this.Clicked()}>
          <Image source={Images.rewind} style={styles.image2} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => this.Clicked()}>
          <Image source={Images.nope}  style={styles.image}/>
        </TouchableOpacity>        
        <TouchableOpacity activeOpacity={0.5} onPress={() => this.Clicked()}>
          <Image source={Images.boost}  style={styles.image2}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => this.Clicked()}>
          <Image source={Images.like}  style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => this.Clicked()}>
          <Image source={require('../../App/Images/super-like.png')}  style={styles.image2}/>
        </TouchableOpacity>
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
    width: 50,
    height: 50,
    resizeMode: 'contain' 
  },
  image2: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain'
  }
});
