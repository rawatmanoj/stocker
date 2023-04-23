import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  secret: "mynewscrete",
  providers: [
    GoogleProvider({
      clientId: '200568372628-slql8tu04o47bs7uaovlitp5v0ognss6.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)