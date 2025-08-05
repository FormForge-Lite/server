export type SendResOption<T = any> = {
  status: number;
  message: string;
  data: T;
};

export default class SendRes<T = any> {
  status: number;
  message: string;
  data: T;
  success: boolean;
  constructor({
    status = 200,
    message = "Success",
    data = null as T,
  }: SendResOption<T>) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = status >= 200 && status < 300;
  }

  static ok<T = any>(data?: T, message = "Success") {
    return new SendRes({ status: 200, message, data });
  }

  static created<T = any>(data?: T, message = "Created") {
    return new SendRes({ status: 201, message, data });
  }

  static custom<T = any>({ status, message, data }: SendResOption<T>) {
    return new SendRes({ status, message, data });
  }
}
