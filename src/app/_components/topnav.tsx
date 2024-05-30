import { CircleUserRound } from "lucide-react";
import NextAuth from "next-auth";

import { Button } from "~/components/ui/button";
import { auth, signIn } from "~/server/auth";

export async function TopNav() {
  const session = await auth();
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <h1 className="text-3xl font-bold">
        <span className="text-primary">Kelin</span>Rate
      </h1>
      <div className="flex items-center gap-3">
        {!session?.user ? (
          <form>
            <div className="flex items-center justify-center gap-2">
              <Button
                formAction={async () => {
                  "use server";

                  await signIn("discord");
                }}
              >
                Войти или зарегистрироваться
              </Button>
            </div>
          </form>
        ) : (
          <CircleUserRound />
        )}
      </div>
    </header>
  );
}
