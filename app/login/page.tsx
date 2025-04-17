"use client";
import React, { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const { data: session } = useSession();
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    // signOut({
    //   email:formValue.email
    //   password:formValue.password
    // })

    setFormValue({ email: "", password: "" });
  };
  const LoginWithGitHub = () => {
    signIn("github", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  const LoginWithGoogle = () => {
    signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  const LoginWithFacebook = () => {
    signIn("facebook", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  console.log(session);

  return (
    <div className="  ">
      <div className="flex items-center justify-center h-screen  w-[90%] mx-auto max-w-[1440px]">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Log In</TabsTrigger>
            <TabsTrigger value="password">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
              </CardHeader>
              <CardContent className="">
                <form onSubmit={submit} className="flex flex-col gap-3">
                  <div className="space-y-3">
                    <Label htmlFor="name">Email</Label>
                    <Input
                      value={formValue.email}
                      onChange={(e: any) =>
                        setFormValue({ ...formValue, email: e.target.value })
                      }
                      id="name"
                      placeholder="peduarte@gmail.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="username">Password</Label>
                    <Input
                      value={formValue.password}
                      onChange={(e: any) =>
                        setFormValue({ ...formValue, password: e.target.value })
                      }
                      id="username"
                      placeholder="......."
                    />
                  </div>
                  <Button type="submit">Save changes</Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 *:w-full ">
                <div className="flex items-center gap-3 ">
                  <div className="w-full h-px bg-gray-300"></div>
                  <p className="text-lg font-medium">Or</p>
                  <div className="w-full h-px bg-gray-300"></div>
                </div>
                <Button onClick={LoginWithGoogle}>
                  <FaGoogle /> Login with Google
                </Button>
                <Button onClick={LoginWithFacebook}>
                  <FaFacebook /> Login with Facebook
                </Button>
                <Button>
                  <FaTwitter /> Login with Twitter
                </Button>
                <Button onClick={LoginWithGitHub}>
                  <FaGithub />
                  Login with GitHub
                </Button>
                <Button>
                  <FaLinkedin />
                  Login with Linkedin
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
