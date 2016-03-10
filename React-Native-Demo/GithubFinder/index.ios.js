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
    TextInput,
    Image,
    NavigatorIOS,

} from 'react-native';

var BASE_URL = 'https://api.github.com/search/respositories?q=';

var MyView = React.createClass({
    _handleBackButtonPress: function() {
        this.props.navigator.pop();
    },
    _handleNextButtonPress: function() {
        this.props.navigator.push(nextRoute);
    },

});


class GithubFinder extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
            component: MyView,
            title: 'My View Title',
            passProps: { myProp: 'foo' },
         }}
                />
        );
    }


}


var onSearchChange =

    function (event:object) {
        var searchTerm = event.nativeEvent.text.toLowerCase();
        alert("**");
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
