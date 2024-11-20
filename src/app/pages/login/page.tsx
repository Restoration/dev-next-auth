import {
  LoginButton,
} from "@/components/LoginButton";
import {
  LogoutButton,
} from "@/components/LogoutButton";

export default async function Home() {

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