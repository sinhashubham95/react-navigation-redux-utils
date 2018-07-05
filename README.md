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
