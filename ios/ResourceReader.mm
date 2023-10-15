#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ResourceReader, NSObject)

RCT_EXTERN_METHOD(getResourceValue:(NSString *)key
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
