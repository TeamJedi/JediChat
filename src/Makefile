CORDOVA=PATH=../node_modules/.bin:$(PATH) cordova
IONIC=PATH=../node_modules/.bin:$(PATH) ionic
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
	$(IONIC) serve

