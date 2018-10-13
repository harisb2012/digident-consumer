import { createStackNavigator } from 'react-navigation'

import * as routes from './routes'
import { AuthLoadingScene } from '../Scenes/AuthLoadingScene'
import { SimActivationScene } from '../Scenes/SimActivation/SimActivationScene'
import { VerifyIdentityScene } from '../Scenes/VerifyIdentity/VerifyIdentityScene'
import { IdentityVerifiedScene } from '../Scenes/IdentityVerified/IdentityVerifiedScene'

export default createStackNavigator(
  {
    [routes.AUTH_LOADING]: AuthLoadingScene,
    [routes.SIM_ACTIVATION]: SimActivationScene,
    [routes.VERIFY_IDENTITY]: VerifyIdentityScene,
    [routes.IDENTITY_VERIFIED]: IdentityVerifiedScene
  },
  {
    initialRouteName: routes.AUTH_LOADING,
    headerMode: 'none'
  }
)
