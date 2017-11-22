import React from 'react';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

function Home({ navigation }) {
  return (<View>
    <Text>Home</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Text>To Dashboard</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text>Open Drawer</Text>
    </TouchableOpacity>
  </View>)
}

function Dashboard({ navigation }) {
  return (<View>
    <Text>Dashboard</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>To Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text>Open Drawer</Text>
    </TouchableOpacity>
  </View>)
}

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='home' size={30} color='black' />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='dashboard' size={30} color='black' />
    }
  }
});

const Stack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard",
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'green',
      }
    },
  },
});

const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: () => <FontAwesome name="home" size={20} color="red" />
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: "Dashboard",
      drawerIcon: () => <FontAwesome name="dashboard" size={20} color="red" />
    },
  },
});

export default class App extends React.Component {
  render() {
    return (<View style={{flex: 1}}>
        <View style={{height: Constants.statusBarHeight}}>
          <StatusBar translucent barStyle='light-content' />
        </View>
        {/* <Tabs /> */}
        {/* <Stack /> */}
        <Drawer />
    </View>);
  }
}
