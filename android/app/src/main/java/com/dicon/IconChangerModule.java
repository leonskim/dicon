package com.dicon;

import android.content.ComponentName;
import android.content.pm.PackageManager;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class IconChangerModule extends ReactContextBaseJavaModule {

  private ReactApplicationContext reactContext;
  private ComponentName defaultComponent;

  public IconChangerModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
    defaultComponent = new ComponentName("com.dicon", "com.dicon.MainActivity");
  }

  @Override
  public String getName() {
    return "IconChanger";
  }

  @ReactMethod
  public void set(String name) {
    String iconActivity = String.format("com.dicon.%sActivity", name);
    PackageManager pm = this.reactContext.getPackageManager();
    ComponentName component = this.defaultComponent;
    if (name != null) {
      component = new ComponentName("com.dicon", iconActivity);
    }
    pm.setComponentEnabledSetting(
        this.defaultComponent,
        PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
        PackageManager.DONT_KILL_APP);
    pm.setComponentEnabledSetting(
        component,
        PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
        PackageManager.DONT_KILL_APP);
  }

}
