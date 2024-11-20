"use client";

import { signIn } from "next-auth/react";

// ログインボタン
export const LoginButton = () => {
  const handleLogin = async () => {
    try {
      const callbackUrl = "/protected";
      signIn("credentials", {
        redirect: false,
        callbackUrl,
      });
    } catch (error) {
      window.alert(error);
    }
  };
  return (
    <>
      <button style={{ marginRight: 10 }} onClick={() => handleLogin()}>
        Sign in
      </button>
      <button style={{ marginRight: 10 }} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
};
