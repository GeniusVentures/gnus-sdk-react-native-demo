// navigation/types.ts
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number};
};

export type BottomTabParamList = {
  Feed: undefined;
  Profile: undefined;
};

// Optionally, extend the default types if needed
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
