"use client";
import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return <img src="/account.svg" onClick={() => signIn()} />;
}
