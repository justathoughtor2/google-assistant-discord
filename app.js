'use strict'

let google = require('googleapis')
let OAuth2 = google.auth.OAuth2

let oauth2Client = new OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
)
