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


	<TextInput
		autoCapitalize="none"
		autoCorrect={false}
		placeholder="Search for a project"
		style={styles.searchBarInput}
	/>
			

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBarInput: {
	marginTop: 30,
	padding: 5,
	fontSize: 15,
   	height: 30,
	backgroundColor: '#eaeaea'
  },
});

AppRegistry.registerComponent('GithubFinder', () => GithubFinder);
