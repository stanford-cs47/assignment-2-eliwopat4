import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import { Images, Profiles } from '../../App/Themes';

export default class PictureCard extends React.Component {

 constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    console.log(this.props)
  }

  render() {
    const B = (props) => <Text style={{fontWeight: 'bold'}}> {props.children}</Text>
    return (
      <View style={styles.container}>
        <Image source={require('../../App/Images/Profiles/harold.jpg')} style={styles.image} />
        <View style={styles.information}>
            <Text style={{fontSize: 20}}> <B>{this.props.name}</B>, {this.props.age} </Text>
            <Text style={{marginHorizontal: 5, marginBottom: 10, color: 'gray'}}> {this.props.occupation} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

