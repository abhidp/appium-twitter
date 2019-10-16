Here I have used WebdriverIO framework with Appium to automate the Twitter Android App using PageObjectModel

The twitter.apk file is under ./apps folder. 

This apk should be placed inside
/home/<user>/Android/Sdk/platform-tools/ folder
 and installed in the Android emulator using the command : 
 
 ` adb -e install -r twitter.apk `


Prerequisite installations:

* JAVA JDK 8+
* APPIUM
* ANDROID SDK
* Virtual Device with Android 8 
* AVD Manager for Emulator
* NODE latest stable release
* NPM latest stable release
* JAVA_HOME, ANDROID_HOME and NODE defined in PATH Env Variables



Framework:
This framework uses Mocha for executions and assertions. 
Runner is WebdriverIO with the help of Appium HTTP client.

Design:
PageObjectModel: Elements from various screens are extracted using UIAutomatorViewer (present under /home/<user>/Android/Sdk/tools/bin)

Each screen has its own screen.js file under pageObjects folder.

All elements from a particular screen are extracted and maintained independently from other screens. This improves readablility and maintainability and reduces re-work when elements are added or changed in the future. 

Tests: 
Tests are under ./test/specs/*spec.js
There are two test : 
* post a Tweet: Here the user lands on Homepage and clicks the Compose tweet button and enters a random tweet. The elements are refereced from earlier defined pageObjects 

* search for a Tweet: Here teh user navigates to the search page by clicking on the search button from homepage. Then enter his desired topic to search for tweets/stories. This actions navigates thru 2 different screen. Due to pageobject already defined, its easier to reference and navigate to desired pages and perform different actions without repeating the code. 



Execution: 

* Clone the repo.

* Install dependencies with `npm install`

* Start Emulator

* Start Appium server on localhost port: 4723

* Run the script `npm run android.app` to run all tests under ./tests/specs



