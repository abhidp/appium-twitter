import HomeScreen from '../pageObjects/homeScreen'
import ComposeTweetScreen from '../pageObjects/composeTweetScreen'
import SearchScreen from '../pageObjects/searchScreen';

describe('Open Twitter App and Search for tweet', () => {
    beforeEach(() => {
        HomeScreen.waitForIsShown()
        HomeScreen.searchButton.click()
        SearchScreen.waitForIsShown()
    });

    it('should be able to search for a Sports tweet successfully', () => {
        SearchScreen.sportsButton.click()
        SearchScreen.searchBarQuery.setValue('Rugby')
    });

});