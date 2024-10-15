export interface User {
  username: string;
  authToken: string;
}

export interface BankBalance {
  username: string;
  balance: number;
}

export const mockUser: User[] = [
  { username: "alice", authToken: "pass123" },
  { username: "bob", authToken: "secret456" },
  { username: "charlie", authToken: "qwerty789" },
];

export const mockBankBalance: BankBalance[] = [
  { username: "alice", balance: 1000 },
  { username: "bob", balance: 2500 },
  { username: "charlie", balance: 500 },
];