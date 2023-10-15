import Foundation

@objc(ResourceReader)
class ResourceReader: NSObject, RCTBridgeModule {

  static func moduleName() -> String! {
    return "ResourceReader"
  }

  @objc(getResourceValue:withResolver:withRejecter:)
  func getResourceValue(key: String, resolve:@escaping RCTPromiseResolveBlock, reject:@escaping RCTPromiseRejectBlock) -> Void {
    if let value = Bundle.main.object(forInfoDictionaryKey: key) as? String {
      resolve(value)
    } else {
      reject("NOT_FOUND", "The given key is not found in Info.plist", nil)
    }
  }
}
