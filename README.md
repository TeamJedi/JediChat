# JediChat

This is the JediChat cordova app that uses WebRTC to communicate with discovered ipfs/olsrd peers.

All of the web content should be placed under the src/www/ folder. The build process will copy that for each target platform.

To run this in an android emulator, use:

	cordova emulate android

Run `make` to build the arm, arm64, x86, and x86_64 debug apk packages.

