# React-Navigation-Redux-Utils

React-Navigation-Redux-Utils is born from the requirements that are not being fulfilled easily when React Navigation has removed it's support from redux integration.

## Installation

Since the library is a JS-based solution, to install the latest version of react-navigation you only need to run:

```bash
yarn add react-navigation-redux-utils
```

or

```bash
npm install --save react-navigation-redux-utils
```

## Documentation

```
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { NavigationUtils } from 'react-navigation-redux-utils';

const topMostLevelStackNavigator = createStackNavigator({
  ...routeConfigMap,
});

class Root extends React.Component {
  setNavigatorRef = ref => {
    NavigationUtils.setNavigatorReference(ref);
  }

  render() {
    return (
      <topLevelStackNavigator
        ref={this.setNavigatorRef}
      />
    );
  }
}
```

```
import { NavigationUtils } from 'react-navigation-redux-utils';

// This is used to get the key of the route next to the route name passed as parameter.
// This is useful because for go back function, if a key is passed as parameter, then
// it will take you to the screen previous to the screen with that key.
// So if the stack navigator looks like A->B->C->D->E and from screen E,
// you want to go back to A, then doing something like this will work.
// this.props.navigation.goBack(NavigationUtils.getKeyForNextRoute('A'));
// If there are multiple routes corresponding to a screen in the stack,
// it will consider the last added screen i.e. the screen in the top of the stack.
NavigationUtils.getKeyForNextRoute(ROUTE_NAME);

// The access to the key to any screen is avaialable only
// local to that screen with it's navigation prop.
// But if it is required at any other place, it can be done using this function.
// If there are multiple routes corresponding to a screen in the stack,
// it will consider the last added screen i.e. the screen in the top of the stack.
NavigationUtils.getKeyForRoute(ROUTE_NAME);

// It will give the route name of the screen on the top of the stack.
// The NAVIGATION_STATE parameter is optional.
// If nothing is passed to this function, it will take the navigation state
// from the reference set to this Utility Class.
NavigationUtils.getCurrentRoute(NAVIGATION_STATE);

// It will give the key of the screen on the top of the stack.
// The NAVIGATION_STATE parameter is optional.
// If nothing is passed to this function, it will take the navigation state
// from the reference set to this Utility Class.
NavigationUtils.getCurrentRouteKey(NAVIGATION_STATE);

// If there is a requirement to dispatch an action from outside of any
// StackNavigator components like from a Redux Action or Redux Middleware, etc,
// then you need to use this function in which you will pass the action as parameter.
NavigationUtils.dispatch(ACTION);

// If you want to obtain the entire navigation state at any point,
// then calling this function will help you get the required result.
NavigationUtils.getState();
```

```
import React from 'react';
import { View, Text } from 'react-native';
import { withNavigationDebounce } from 'react-navigation-redux-utils';

class Sample extends React.Component {
  // All these are debounced with time interval 300ms.
  // this.props.navigation.navigate(ROUTE_NAME);
  // this.props.navigation.goBack(KEY);
  // this.props.navigation.push(ROUTE_NAME);
  // this.props.navigation.pop(NUMBER_OF_SCREEN_POPS);
  render() {
    return (
      <View>
        <Text>This component has debounced navigation functions.</Text>
      </View>
    );
  }
}

export default withNavigationDebounce(Sample, 300);
```
