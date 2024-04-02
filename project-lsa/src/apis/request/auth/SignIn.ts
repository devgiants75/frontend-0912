export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  nickname: string;
  telNumber: string;
  address: string;
}
