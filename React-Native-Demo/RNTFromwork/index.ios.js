// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View,
//   TabBarIOS,
//   NavigatorIOS,
// } from 'react-native';

// class RNTFromwork extends Component {

//   getInitialState () {
//     return {
//           selectedTab: 'home'
//       };
//   }

//   render() {
//     return (
      

//       <TabBarIOS selectedTab={this.state.selectedTab}>
//             <TabBarIOS.Item accessibilityLabel={"Excellent"}
//                 selected={this.state.selectedTab === 'home'}
//                 title="精华"
//                 name="home"
//                 icon={{uri: 'icon.png', isStatic: true}}
//                 onPress={() => {
//                     this.setState({
//                       selectedTab: 'home'
//                     });
//                 }}>
//                 // <NavigatorIOS style={Style.container}
//                 //     tintColor={'#333344'}
//                 //     initialRoute={{
//                 //       title: '社区精华',
//                 //       component: require('./App/Views/Home/Home')
//                 //     }}
//                 //     itemWrapperStyle={Style.navigator} />

//                   <View style={styles.container}>
//                      <Text style={styles.welcome}>
//                        Welcome to React Native!
//                      </Text>

//                   </View>
//             </TabBarIOS.Item>

//             <TabBarIOS.Item accessibilityLabel={"Nodes"}
//                 selected={this.state.selectedTab === 'nodes'}
//                 title="节点分类"
//                 name="nodes"
//                 icon={{uri:'nodes.png'}}
//                 onPress={() => {
//                     this.setState({
//                       selectedTab: 'nodes'
//                     });
//                 }}>

//                 // <NavigatorIOS style={Style.container}
//                 //     tintColor={'#333344'}
//                 //     initialRoute={{
//                 //       title: '节点分类',
//                 //       component: require('./App/Views/Home/Nodes')
//                 //     }}
//                 //     itemWrapperStyle={Style.navigator} />
//                 <View style={styles.container}>
//                      <Text style={styles.welcome}>
//                        Welcome to React Native!
//                      </Text>

//                   </View>

//             </TabBarIOS.Item>

//             <TabBarIOS.Item accessibilityLabel={"About"}
//                 selected={this.state.selectedTab === 'about'}
//                 title="关于"
//                 name="about"
//                 icon={{uri: 'reactnative_logo.png'}}
//                 onPress={() => {
//                     this.setState({
//                       selectedTab: 'about'
//                     });
//                 }}>

//                 // <NavigatorIOS style={Style.container}
//                 //     tintColor={'#333344'}
//                 //     initialRoute={{
//                 //       title: 'About',
//                 //       component: require('./App/Views/Home/About')
//                 //     }}
//                 //     itemWrapperStyle={Style.navigator} />

//                 <View style={styles.container}>
//                      <Text style={styles.welcome}>
//                        Welcome to React Native!
//                      </Text>

//                   </View>

//             </TabBarIOS.Item>
//         </TabBarIOS>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('RNTFromwork', () => RNTFromwork);


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;

var RNTFromwork = React.createClass({
  getInitialState: function() {
      return {
          selectedTab: 'home'
      };
  },
  render: function() {
    return (
        <TabBarIOS selectedTab={this.state.selectedTab}>
            <TabBarIOS.Item accessibilityLabel={"Excellent"}
                selected={this.state.selectedTab === 'home'}
                title="精华"
                name="home"
                icon={{uri: 'icon.png', isStatic: true}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'home'
                    });
                }}>

                <NavigatorIOS style={styles.container}
                    tintColor={'#333344'}
                    initialRoute={{
                      title: '社区精华',
                      component: require('./App/Views/Home/Home')
                    }}
                    itemWrapperStyle={styles.navigator} />

                

            </TabBarIOS.Item>

            <TabBarIOS.Item accessibilityLabel={"Nodes"}
                selected={this.state.selectedTab === 'nodes'}
                title="节点分类"
                name="nodes"
                icon={{uri:'nodes.png'}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'nodes'
                    });
                }}>

                <View style={styles.container}>
                     <Text style={styles.welcome}>
                       Welcome to React Native!
                     </Text>

                  </View>


            </TabBarIOS.Item>

            <TabBarIOS.Item accessibilityLabel={"About"}
                selected={this.state.selectedTab === 'about'}
                title="关于"
                name="about"
                icon={{uri: 'reactnative_logo.png'}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'about'
                    });
                }}>

                  <View style={styles.container}>
                     <Text style={styles.welcome}>
                       Welcome to React Native!
                     </Text>

                  </View>

            </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EAEC'
  },
  navigator: {
    backgroundColor: '#E7EAEC'
  },

    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});

AppRegistry.registerComponent('RNTFromwork', () => RNTFromwork);

