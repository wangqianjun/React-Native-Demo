/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,

    Image,

} from 'react-native';

class GithubFinder extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>
          This is
        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  customing: {
    //fontSize: 20,
    //textAlign: 'center',
    width: 200,
    height: 200,
    //margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GithubFinder', () => GithubFinder);
