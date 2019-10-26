import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';

const SwitchNavigator = createSwitchNavigator({
  Home,
});

export default createAppContainer(SwitchNavigator);
