import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Header from './components/Header';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </SafeAreaView>
      </View>
    </Provider>
  );
};

export default App;
