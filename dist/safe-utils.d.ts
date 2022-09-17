declare type Some<T> = {
    type: "some";
    value: T;
};
declare type None = {
    type: "none";
    value: null | undefined;
};
declare type Ok<T> = {
    result: "ok";
    data: T;
};
declare type Err<T> = {
    result: "err";
    data: T;
};
export declare type Option<T> = Some<T> | None;
export declare type Result<T, R> = Ok<T> | Err<R>;
export declare function Some<T>(value: T): {
    readonly type: "some";
    readonly value: T;
};
export declare const None: {
    readonly type: "none";
    readonly value: any;
};
export declare function Ok<T>(value: T): {
    readonly result: "ok";
    readonly data: T;
};
export declare function Err<T>(value: T): {
    readonly result: "err";
    readonly data: T;
};
export declare function isSome<T>(wrapper: Option<T>): wrapper is Some<T>;
export declare function isNone<T>(wrapper: Option<T>): wrapper is None;
export declare function isOk<T, R>(wrapper: Result<T, R>): wrapper is Ok<T>;
export declare function isErr<T, R>(wrapper: Result<T, R>): wrapper is Err<R>;
export {};
