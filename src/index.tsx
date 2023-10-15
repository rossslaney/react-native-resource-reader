import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-resource-reader' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ResourceReader = NativeModules.ResourceReader
  ? NativeModules.ResourceReader
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function getResourceValue(key: string): Promise<string> {
  return ResourceReader.getResourceValue(key);
}
