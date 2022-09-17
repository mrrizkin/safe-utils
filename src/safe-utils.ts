type Some<T> = { type: "some"; value: T };
type None = { type: "none"; value: null | undefined };
type Ok<T> = { result: "ok"; data: T };
type Err<T> = { result: "err"; data: T };

export type Option<T> = Some<T> | None;
export type Result<T, R> = Ok<T> | Err<R>;

export function Some<T>(value: T) {
  return { type: "some", value } as const;
}

export const None = { type: "none", value: null } as const;

export function Ok<T>(value: T) {
  return { result: "ok", data: value } as const;
}

export function Err<T>(value: T) {
  return { result: "err", data: value } as const;
}

export function isSome<T>(wrapper: Option<T>): wrapper is Some<T> {
  return wrapper.type === "some";
}

export function isNone<T>(wrapper: Option<T>): wrapper is None {
  return wrapper.type === "none";
}

export function isOk<T, R>(wrapper: Result<T, R>): wrapper is Ok<T> {
  return wrapper.result === "ok";
}

export function isErr<T, R>(wrapper: Result<T, R>): wrapper is Err<R> {
  return wrapper.result === "err";
}
