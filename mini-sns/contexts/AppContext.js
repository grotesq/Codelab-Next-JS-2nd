import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();
const AppConsumer = Consumer;

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 글로벌 데이터
      key: 'value',
      user: null,
      // update
      update: (state, callback) => {
        this.setState(state, callback);
      },
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

const withAppContext = TargetComponent => {
  const WithAppContextComponent = props => (
    <AppConsumer>
      {context => <TargetComponent {...props} context={context} />}
    </AppConsumer>
  );
  if (TargetComponent.getInitialProps) {
    WithAppContextComponent.getInitialProps = TargetComponent.getInitialProps;
  }
  return WithAppContextComponent;
};

export { AppProvider, AppConsumer, withAppContext };