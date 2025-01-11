export interface IRegisterRequest {
  email: string;
  login: string;
  password: string;
  passwordConfirm: string;
  birthDate: Date;
  phoneNumber: string;
  roleIds: unknown;
}

export interface ILoginRequest {
  login: string;
  password: string;
}

export interface IEmailVerifyRequest {
  email: string;
  code: string;
}
