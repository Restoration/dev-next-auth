import {
  LoginButton,
} from "@/components/LoginButton";
import {
  LogoutButton,
} from "@/app/components/LogoutButton";
import { getServerSession } from "next-auth";
import { options } from "@/app/config/options";

export default async function Home() {
  const session = await getServerSession(options)
  const user = session?.user // ログインしていなければnullになる。
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
              <LoginButton/>
              <LogoutButton/>
          </div>
      </main>
  );
}