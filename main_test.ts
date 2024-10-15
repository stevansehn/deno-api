import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { handler } from "./main.ts";

Deno.test("Root route returns 200 OK", async () => {
  const req = new Request("http://localhost:3000/");
  const response = await handler(req);
  assertEquals(response.status, 200);
  assertEquals(await response.text(), "Welcome to the root route!");
});

Deno.test("GET /balance - valid credentials", async () => {
  const req = new Request("http://localhost:3000/balance?username=alice&authToken=pass123");
  const response = await handler(req);
  
  assertEquals(response.status, 200);
  assertEquals(await response.text(), "Your balance is: $1000");
});

Deno.test("Invalid route returns 404 Not Found", async () => {
  const req = new Request("http://localhost:3000/invalid-route");
  const response = await handler(req);
  
  assertEquals(response.status, 404);
  assertEquals(await response.text(), "Not Found");
});

Deno.test("GET /balance - invalid credentials", async () => {
  const req = new Request("http://localhost:3000/balance?username=alice&authToken=wrongToken");
  const response = await handler(req);
  
  assertEquals(response.status, 401);
  assertEquals(await response.text(), "Invalid credentials");
});

Deno.test("GET /balance - missing username", async () => {
  const req = new Request("http://localhost:3000/balance?authToken=pass123");
  const response = await handler(req);
  
  assertEquals(response.status, 401);
  assertEquals(await response.text(), "Invalid credentials");
});

Deno.test("GET /balance - missing authToken", async () => {
  const req = new Request("http://localhost:3000/balance?username=alice");
  const response = await handler(req);
  
  assertEquals(response.status, 401);
  assertEquals(await response.text(), "Invalid credentials");
});
