CORDOVA=PATH=../node_modules/.bin:$(PATH) cordova
APPNAME=JediRouter

all: android

www: www/css/*.css www/img/*.png www/*.html www/js/*.js

android: ./platforms/android/assets ./platforms/android/build/outputs/apk/android-armv7-debug.apk ./platforms/android/build/outputs/apk/android-x86-debug.apk ./platforms/android/build/outputs/apk/android-arm64-debug.apk ./platforms/android/build/outputs/apk/android-x86_64-debug.apk

./platforms/android/assets:
	mkdir -p platforms/android/assets

./platforms/android/build/outputs/apk/android-armv7-debug.apk: $(shell find www/ -type f -print)
	$(CORDOVA) build android

./platforms/android/build/outputs/apk/android-x86-debug.apk: $(shell find www/ -type f -print)
	$(CORDOVA) build android

./platforms/android/build/outputs/apk/android-arm64-debug.apk: $(shell find www/ -type f -print)
	$(CORDOVA) build android --xwalk64bit

./platforms/android/build/outputs/apk/android-x86_64-debug.apk: $(shell find www/ -type f -print)
	$(CORDOVA) build android --xwalk64bit

clean:
	rm -fr platforms/android/build || true

try:
	$(CORDOVA) emulate android

# cordova create myApp org.apache.cordova.myApp myApp
# cordova plugin add cordova-plugin-camera --save
# cordova platform add android --save
# cordova requirements android
# cordova build android --verbose
# cordova run android
# cordova build android --release -- --keystore="..\android.keystore" --storePassword=android --alias=mykey
