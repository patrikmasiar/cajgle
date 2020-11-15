import React, { createContext, Component } from 'react';

const AppContext = createContext();

class AppProvider extends Component {;

  state = {
    userName: '',
  };

  setUserName = (name) => {
    this.setState({userName: name});
  }

  getStore() {
    return {
        state: this.state,
        actions: {
          setName: this.setUserName,
        },
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.getStore()}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export {AppProvider};

export const useStore = () => {
  return React.useContext(AppContext);
}