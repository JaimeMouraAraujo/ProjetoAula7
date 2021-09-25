import React from 'react';
import {View, Text} from 'react-native';

import Galery from './src/page/Galeria';

const App = () => {
  return (
    <>
      <View 
      style={{ 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'blue',
        flexGrow: 1
      }}
    >
      <Galery />
    </View>
    <View 
      style={{ 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'yellow',
        flexGrow: 8
      }}
    >
      <Galery />
    </View>
    <View 
      style={{ 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'blue',
        flexGrow: 1
      }}
    >
      <Galery />
    </View>
    </>
  );
}

export default App;