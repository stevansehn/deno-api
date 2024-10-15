import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { User, BankBalance, mockUser, mockBankBalance } from "./mockData.ts";

type RouteHandler = (url: URL) => Response;

const routes: Record<string, RouteHandler> = {
  "/": () => new Response("Welcome to the root route!"),
  "/balance": (url: URL) => {
    const username = url.searchParams.get("username");
    const authToken = url.searchParams.get("authToken");

    // Validate user credentials
    const user = mockUser.find((u: User) => u.username === username && u.authToken === authToken);

    if (!user) {
      return new Response("Invalid credentials", { status: 401 });
    }

    // If credentials are valid, check for balance
    const userBalance = mockBankBalance.find((b: BankBalance) => b.username === username);

    if (userBalance) {
      return new Response(`Your balance is: $${userBalance.balance}`);
    } else {
      return new Response("Balance not found", { status: 404 });
    }
  }
};

export function handler(req: Request): Response {
  const url = new URL(req.url);
  const path = url.pathname;
  const route = routes[path];
  return route ? route(url) : new Response("Not Found", { status: 404 });
}

// Only start the server if this file is run directly (not imported)
if (import.meta.main) {
  console.log("Server running on http://localhost:3000");
  await serve(handler, { port: 3000 });
}
