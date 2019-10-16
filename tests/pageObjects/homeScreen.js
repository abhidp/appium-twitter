import AppScreen from './app.screen';

const SELECTORS = {
    NEW_TWEET: '~New Tweet',
    SEARCH: 'com.twitter.android:id/moments',
    NOTIFICATIONS: 'com.twitter.android:id/notifications',
    MESSAGES: 'com.twitter.android:id/dms',
    TIMELINE_SWITCH: 'com.twitter.android:id/toolbar_timeline_switch'

};

class HomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.HOME_SCREEN);
    }

    get newTweetButton() {
        return $(SELECTORS.NEW_TWEET)
    }
    get notificationsButton() {
        return $(SELECTORS.NOTIFICATIONS)
    }
    get messagesButton() {
        return $(SELECTORS.MESSAGES)
    }
    get searchButton() {
        return $(SELECTORS.SEARCH)
    }
     get timelineSwitchButton() {
        return $(SELECTORS.TIMELINE_SWITCH)
    }
}

export default new HomeScreen();