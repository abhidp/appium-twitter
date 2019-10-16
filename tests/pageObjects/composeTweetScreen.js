import AppScreen from './app.screen';

const SELECTORS = {
    COMPOSE_TWEET: 'com.twitter.android:id/tweet_text',
    LOCATION: 'com.twitter.android:id/location',
    POLL: 'com.twitter.android:id/poll',
    GIF: 'com.twitter.android:id/found_media',
    PHOTOS: 'com.twitter.android:id/gallery',
    PUBLISH_TWEET: 'com.twitter.android:id/button_tweet'

};

class ComposeTweetScreen extends AppScreen {
    constructor () {
        super(SELECTORS.COMPOSE_TWEET);
    }

    get composeTweetText() {
        return $(SELECTORS.COMPOSE_TWEET)
    }

    get locationButton() {
        return $(SELECTORS.LOCATION)
    }

    get pollButton() {
        return $(SELECTORS.POLL)
    }

    get gifButton() {
        return $(SELECTORS.GIF)
    }

    get photosButton() {
        return $(SELECTORS.PHOTOS)
    }

    get publishTweetButton() {
        return $(SELECTORS.PUBLISH_TWEET)
    }

}

export default new ComposeTweetScreen();