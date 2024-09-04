import React from 'react';
import { View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigator/AppNavigation';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppNavigation />
      </View>
    </Provider>
  );
}

export default App;
