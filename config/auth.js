module.exports = {

    'facebookAuth' : {
        'clientID'      : '199688497454898', // your App ID
        'clientSecret'  : '7ef404e6172bd5aca5110b2da393dd8f', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'kfp1dIrvWKj2lbKpZzwljSvz4',
        'consumerSecret'    : '3B3pLaxPSioAGmKWJ4W01REBe80C8zAUncvfUBGWtcNQZgarsL',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },
    
    'googleAuth' : {
        'clientID'      : '853191641691-h2urnb5igp2h0p546vt133rr6lokrn3v.apps.googleusercontent.com',
        'clientSecret'  : '-wzTyn3TrVdPGiLWExqg4lMp',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
