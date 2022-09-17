"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isErr = exports.isOk = exports.isNone = exports.isSome = exports.Err = exports.Ok = exports.None = exports.Some = void 0;
function Some(value) {
    return { type: "some", value };
}
exports.Some = Some;
exports.None = { type: "none", value: null };
function Ok(value) {
    return { result: "ok", data: value };
}
exports.Ok = Ok;
function Err(value) {
    return { result: "err", data: value };
}
exports.Err = Err;
function isSome(wrapper) {
    return wrapper.type === "some";
}
exports.isSome = isSome;
function isNone(wrapper) {
    return wrapper.type === "none";
}
exports.isNone = isNone;
function isOk(wrapper) {
    return wrapper.result === "ok";
}
exports.isOk = isOk;
function isErr(wrapper) {
    return wrapper.result === "err";
}
exports.isErr = isErr;
