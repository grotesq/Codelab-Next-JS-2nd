참조 : https://ko.reactjs.org/docs/context.html

## contexts/AppContext.js

```js
import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();
const AppConsumer = Consumer;

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 글로벌 데이터
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
```

## Entry Point (_app.js, index,js, App.js 등..)

```js
import { AppProvider } from './contexts/AppContext';

render() {
  return(
    <AppProvider>
      { ... }
    </AppProvider>
  )
}
```

## withAppContext

```js
let Content = () => {
  return <>{ this.props.context.### }</>
}

Content = withAppContext( Content );

export default Content;
```
