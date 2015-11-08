import React from "react";

export default function(stateMapping) {
  // for some reason a default argument wasn't compiling correctly...
  stateMapping = stateMapping || {};

  function getState() {
    const newState = {};

    Object.keys(stateMapping).forEach((key) => {
      newState[key] = stateMapping[key].state;
    });

    return newState;
  }

  return (Component) => {
    return class extends React.Component {
      constructor(props) {
        super(props);

        this.state = getState();
        this.listeners = [];
      }

      componentDidMount = () => {
        this.listeners = Object.keys(stateMapping).map((key) => {
          let store = stateMapping[key];

          return store.subscribe(this.handleStateChange);
        });
      }

      componentWillUnmount = () => {
        this.listeners.forEach((unsubscribe) => {
          unsubscribe();
        });
      };

      handleStateChange = () => {
        this.setState(getState());
      }

      render = () => {
        return <Component
          {...this.props}
          {...this.state}
        />
      }
    }
  }
}
