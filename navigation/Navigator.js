import { createStackNavigator } from 'react-navigation'

import * as routes from './routes'
import { AuthLoadingScene } from '../Scenes/AuthLoadingScene'
import { SimActivationScene } from '../Scenes/SimActivation/SimActivationScene'

export default createStackNavigator(
  {
    [routes.AUTH_LOADING]: AuthLoadingScene,
    [routes.SIM_ACTIVATION]: SimActivationScene
  },
  {
    initialRouteName: routes.AUTH_LOADING,
    headerMode: 'none'
  }
)
