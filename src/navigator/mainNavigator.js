import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList195916Navigator from '../features/ArticleList195916/navigator';
import ArticleList195915Navigator from '../features/ArticleList195915/navigator';
import BlankScreen0195914Navigator from '../features/BlankScreen0195914/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList195916: { screen: ArticleList195916Navigator },
ArticleList195915: { screen: ArticleList195915Navigator },
BlankScreen0195914: { screen: BlankScreen0195914Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
