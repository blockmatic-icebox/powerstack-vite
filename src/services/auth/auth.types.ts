export type LoginMethod = "web2_twitter" | "web3_solana" | "web2_userpassword";

export type AuthResponse = {
  data: {} | null;
  error?: Error;
};

export type LoginResponse = {
  token: string;
  error?: Error;
};

export interface CreateSessionParams {
  address?: string;
  signedMessage?: string;
  network?: string;
  message?: string;
  authMethod: LoginMethod;
}
