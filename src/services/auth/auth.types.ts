export type LoginMethod = 'web2_twitter' | 'web3_solana' | 'web2_userpassword'

export interface AuthResponse {
  data: {} | null
  error?: Error
}

export interface LoginResponse {
  token: string
  error?: Error
}

export interface CreateSessionParams {
  address?: string
  signedMessage?: string
  network?: string
  message?: string
  authMethod: LoginMethod
}
