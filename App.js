import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Images, Profiles } from './App/Themes';
import NavigationBar from './components/navigationBar/NavigationBar';
import PictureCard from './components/pictureCard/PictureCard';
import BottomButtons from './components/bottomButtons/BottomButtons';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold; 
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>
         <View style={styles.navigationBar}>
          <NavigationBar/>
        </View>
         <View style={styles.pictureCard}>
          <PictureCard {...this.state} {...this.props} />
        </View>
        <View style={styles.bottomButtons}>
          <BottomButtons/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'gainsboro',
  },
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  pictureCard: {
    flex: 3,
    marginVertical: 30,
    marginHorizontal: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 2,
    borderColor: 'darkgray',
    backgroundColor: 'white',
  },
  bottomButtons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center'
  },
});
