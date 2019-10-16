import AppScreen from './app.screen';

const SELECTORS = {
    SEARCH_HEADER: 'com.twitter.android:id/toolbar',
    SEARCH_BAR: 'Search Twitter',
    FOR_YOU: 'For you',
    NEWS: 'News',
    SPORTS: 'Sports',
    FUN: 'Fun'

};

class SearchScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SEARCH_HEADER);
    }

    get searchBarQuery() {
        return $(SELECTORS.SEARCH_BAR)
    }
    get forYouButton() {
        return $(SELECTORS.FOR_YOU)
    }
    get newsButton() {
        return $(SELECTORS.NEWS)
    }
    get sportsButton() {
        return $(SELECTORS.SPORTS)
    }
     get funButton() {
        return $(SELECTORS.FUN)
    }
}

export default new SearchScreen();