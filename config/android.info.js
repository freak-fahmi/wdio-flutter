class AndroidInfo {
    //Device 1
    static deviceName1() {
        return 'emulator-5554'; // pass the udid or devicename
    }
    static platFormVersion1() {
        return '12.0'; // pass the platform version
    }

    // Device 2
    static deviceName2() {
        return 'GTKRK18B21003373'; // pass the udid or devicename
    }
    static platFormVersion2() {
        return '10.0'; // pass the platform version
    }

    static appName() {
        return 'android-real-debug.apk'; // pass the apk name
    }

    static appName1() {
        return 'app-debug.apk'; // pass the apk name
    }

}

module.exports = AndroidInfo;
