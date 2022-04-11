import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
            clientId: process.env.OAUTH_CLIENT_KEY,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
        }),
        // Passwordless / email sign in
        EmailProvider({
            server: process.env.MAIL_SERVER,
            from: "NextAuth.js <no-reply@example.com>",
        }),
    ],
});
