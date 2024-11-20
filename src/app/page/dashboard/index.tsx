import { LoginButton } from "@/components/LoginButton";
import { LogoutButton } from "@/app/components/LogoutButton";
import { getServerSession } from "next-auth";
import { options } from "@/app/config/options";

export default async function Home() {
  const session = await getServerSession(options);
  const user = session?.user; // ログインしていなければnullになる。
  console.log(user);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <div>{`${JSON.stringify(user)}`}</div>
        {user ? <div>Logged in</div> : <div>Not logged in</div>}
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </main>
  );
}
