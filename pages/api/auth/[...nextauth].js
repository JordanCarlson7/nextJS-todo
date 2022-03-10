import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// const obj = {
//   "GOOGLE_CLIENT_ID": "1085290976684-3elpbg32jigj94do2b7a2cukus4p9ad6.apps.googleusercontent.com",
//   "GOOGLE_CLIENT_SECRET": "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"
// }


const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  debug: false
}

export default (req, res) => NextAuth(req, res, options) 