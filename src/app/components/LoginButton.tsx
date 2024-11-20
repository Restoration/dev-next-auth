"use client";

import { signIn } from "next-auth/react";

// ログインボタン
export const LoginButton = () => {
  // フォーム送信処理
  const onSubmit = async (data: { email: string, password: string }) => {

    const result = await signIn('email-login', {
      redirect: false,
      email: data.email,
      password: data.password
    })

    if (result?.error) {
      alert("ログイン失敗")
    } else {
    //   location.href = '/dashboard'
    console.log(result);
    }
  }
  return (
    <>
      <button style={{ marginRight: 10 }} onClick={() => onSubmit({ email: "user1@example.com", password: "password1" })}>
        Emailログイン
      </button>
      <button style={{ marginRight: 10 }} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
};
