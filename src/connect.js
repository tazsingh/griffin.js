import React from "react";

export default function(Component, stateMapping = {}) {
  function getState() {
    const newState = {};

    Object.keys(stateMapping).forEach((key) => {
      newState[key] = stateMapping[key].state;
    });

    return newState;
  }

  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = getState();
      this.listeners = [];
    }

    componentDidMount() {
      Object.keys(stateMapping).map((key) => {
        let store = stateMapping[key];

        this.listeners.push(store.subscribe(this.handleStateChange));
      });
    }

    componentWillUnmount() {
      this.listeners.forEach((unsubscribe) => {
        unsubscribe();
      });
    };

    handleStateChange() {
      this.setState(getState());
    }

    render() {
      return <Component
        {...this.props}
        {...this.state}
      />
    }
  }
}
