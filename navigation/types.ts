import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

// Define your tab navigator's parameter list
export type TabParamList = {
  Home: undefined;
  MoreInfo: undefined;
};

// Define navigation prop types for each screen
export type HomeScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  'Home'
>;
export type MoreInfoScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  'MoreInfo'
>;

// Define route prop types for each screen
export type HomeScreenRouteProp = RouteProp<TabParamList, 'Home'>;
export type MoreInfoScreenRouteProp = RouteProp<TabParamList, 'MoreInfo'>;
