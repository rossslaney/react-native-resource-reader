package com.resourcereader;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import android.content.Context;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.bridge.WritableMap;

@ReactModule(name = ResourceReaderModule.NAME)
public class ResourceReaderModule extends ReactContextBaseJavaModule {
    public static final String NAME = "ResourceReader";

    public ResourceReaderModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void getResourceValue(String key, Promise promise) {
        try {
            Context context = getReactApplicationContext();
            int stringId = context.getResources().getIdentifier(key, "string", context.getPackageName());

            if (stringId == 0) {  // Not found
                promise.reject("NOT_FOUND", "The given key is not found in strings.xml");
                return;
            }

            String value = context.getString(stringId);
            promise.resolve(value);  // Here's the change

        } catch (Exception e) {
            promise.reject("ERROR", e.getMessage(), e);
        }
    }
}
