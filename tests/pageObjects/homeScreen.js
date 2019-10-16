import AppScreen from './app.screen';

const SELECTORS = {
    HOME_SCREEN: '~Home-screen',
    NEW_TWEET: '~New Tweet'

};

class HomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.HOME_SCREEN);
    }

    get newTweet() {
        return $(SELECTORS.NEW_TWEET)
    }
}

export default new HomeScreen();