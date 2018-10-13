import { NativeEventEmitter, NativeModules } from 'react-native'

export class NativeBridge {
  static getNativeBridge() {
    if (!NativeBridge._instance) {
      return new NativeBridge()
    }
  }

  constructor() {
    this.eventEmitter = new NativeEventEmitter(this.getBridge())
  }

  getBridge() {
    return NativeModules.NativeBridge
  }

  initSDK() {
    if ('initSDK' in this.getBridge()) {
      this.getBridge().initSDK()
    }
  }

  addListener(eventType, listener) {
    return this.eventEmitter.addListener(eventType, listener, context)
  }
}
