// App.tsx
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import {initGnus, processGnus} from './geniusSDK/src/geniusSDKWrapper';

export default function App() {
  useEffect(() => {
    // initGnus();
    // processGnus('QmUDMvGQXbUKMsjmTzjf4ZuMx7tHx6Z4x8YH8RbwrgyGAf', 1);
  }, []);
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
