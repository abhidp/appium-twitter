import HomeScreen from '../pageObjects/homeScreen'
import ComposeTweetScreen from '../pageObjects/composeTweetScreen'


describe('Open Twitter App', () => {
    beforeEach(() => {
      HomeScreen.waitForIsShown()
    });

    it('should be able to post a tweet successfully', () => {
        HomeScreen.newTweetButton.click()
        ComposeTweetScreen.composeTweetText.setValue(`Test Tweet${Date.now()}`)
        ComposeTweetScreen.publishTweetButton.click()
    });

});