import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { withNavigation } from 'react-navigation';
import invariant from '../utils/invariant';

export default function withNavigationDebounce(Component, wait = 200) {
  class ComponentWithNavigationDebounce extends React.Component {
    static displayName = `withNavigationDebounce(${Component.displayName ||
      Component.name})`;

    componentDidMount() {
      const { navigation } = this.props;
      invariant(
        !!navigation,
        'withNavigationDebounce can only be used on a view hierarchy of a navigator. The wrapped component is unable to get access to navigation from props or context.'
      );
    }

    lastCalled = Date.now();

    navigate = (...args) => {
      if (Date.now() - this.lastCalled <= wait) {
        return;
      }
      this.lastCalled = Date.now();
      this.props.navigation.goBack(...args);
    };

    goBack = (...args) => {
      if (Date.now() - this.lastCalled <= wait) {
        return;
      }
      this.lastCalled = Date.now();
      this.props.navigation.goBack(...args);
    };

    push = (...args) => {
      if (Date.now() - this.lastCalled <= wait) {
        return;
      }
      this.lastCalled = Date.now();
      this.props.navigation.goBack(...args);
    };

    pop = (...args) => {
      if (Date.now() - this.lastCalled <= wait) {
        return;
      }
      this.lastCalled = Date.now();
      this.props.navigation.goBack(...args);
    };

    render() {
      return (
        <Component
          {...this.props}
          ref={this.props.onRef}
          navigation={{
            ...this.props.navigation,
            goBack: this.goBack,
            navigate: this.navigate,
            push: this.push,
            pop: this.pop,
          }}
        />
      );
    }
  }

  return hoistStatics(
    withNavigation(ComponentWithNavigationDebounce),
    Component
  );
}
