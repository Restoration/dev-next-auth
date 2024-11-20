"use client";

import {signIn} from "next-auth/react";

// ログインボタン
export const LoginButton = () => {
    return (
        <button style={{marginRight: 10}} onClick={() => signIn()}>
            Sign in
        </button>
    );
};
