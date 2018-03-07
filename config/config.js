const config={
		GOOGLE_AUTH: {
									clientID:'205896916041-fbalvkoaddh7e2gpp37d9rs800me7p4c.apps.googleusercontent.com',
									clientSecret:'7OFT5OB9Ti7Qs3zRWS_8P3QL',
									callbackURL: 'http://localhost:8080/auth/google/callback'
								 },
			 JWT_AUTH: {
        					secret: 'Demolibrary'
    						 },
					MONGO: {
		     				URL: 'mongodb://localhost:27017/library'
							},
				GOOGLE_SEARCH:{
								URL:'https://www.googleapis.com/books/v1/volumes?q='
								}

					};
module.exports = config;
