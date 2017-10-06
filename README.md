# Dynamically change RN app icons (Example)
- iOS/Android both use `NativeModule`
- Only allow to use bundled-in image files

# iOS
- Since iOS 10.3, App icon can change with `setAlternateIconName()`
- Can't use `xcassets`. Icon files should be added as resource
- Icons need to be defined in `Info.plist` -- As a list of `CFBundleIcons`

# Android
- Icons should be placed in `/android/src/main/res/...`
- Define icons as `activity-alias`
- Add a module and a package so it can be exposed to JS
- **ISSUE 1**: Icon duplicates - When changing icon, it creates new icon.
- **ISSUE 2**: Activity name changes as a alias name. It could possibly cause issues.
