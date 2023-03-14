import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId: '200568372628-slql8tu04o47bs7uaovlitp5v0ognss6.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/login",
  },
callbacks: {
  async session({ token, session }) {
    // if (token) {
    //   session.user.id = token.id
    //   session.user.name = token.name
    //   session.user.email = token.email
    //   session.user.image = token.picture
    // }

    return session
  },
  // async jwt(data) {
  //   console.log(data)
  //   return {
  //     name:"manoj"
  //   }
  // },
},

}

export default NextAuth(authOptions)