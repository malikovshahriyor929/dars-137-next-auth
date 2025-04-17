import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "auth",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log(credentials?.email,credentials?.password);
        
        try {
          const res = await (
            await fetch(
              "https://679b903633d316846324525e.mockapi.io/lavashxona",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: credentials?.email,
                  password: credentials?.password,
                  lastName: "email",
                  FirstName: "First",
                }),
              }
            )
          ).json();
          const data = res.data;
          console.log(res);
          
          if (res.status == 200 && data) {
            return data;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
    GithubProvider({
        clientId:process.env.NEXT_GITHUB_ID as string,
        clientSecret:process.env.NEXT_GITHUB_SECRET_ID as string,
    }),
    GoogleProvider({
        clientId:process.env.NEXT_GOOGLE_ID as string,
        clientSecret:process.env.NEXT_GOOGLE_SECRET_ID as string,
    }),
  ],
};
