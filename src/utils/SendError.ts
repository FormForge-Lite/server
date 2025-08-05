export type SendErrorOption = {
  status: number;
  code?: string;
  message: string;
  stack?: string;
};

export default class SendError extends Error {
  status: number;
  message: string;
  code?: String;
  success: boolean;
  constructor({ status, message, code, stack }: SendErrorOption) {
    super(message);
    this.status = status;
    this.message = message;
    this.success = false;
    this.code = code;
    this.stack = stack || new Error().stack;

    // Optional if you want more consistent trace:
    Error.captureStackTrace?.(this, this.constructor);
  }
  static badRequest(message = "Bad Request") {
    return new SendError({
      message,
      code: "BAD_REQUEST",
      status: 400,
    });
  }

  static unauthorized(message = "Unauthorized") {
    return new SendError({
      message,
      code: "UNAUTHORIZED",
      status: 401,
    });
  }

  static notFound(message = "Not Found") {
    return new SendError({
      message,
      code: "NOT_FOUND",
      status: 404,
    });
  }

  static internal(message = "Internal Server Error") {
    return new SendError({
      message,
      code: "INTERNAL_SERVER_ERROR",
      status: 500,
    });
  }

  static forbidden(message = "Access Denied") {
    return new SendError({
      message,
      code: "FORBIDDEN",
      status: 403,
    });
  }

  static custom({ status, code, message }: SendErrorOption) {
    return new SendError({ status, code, message });
  }
}
