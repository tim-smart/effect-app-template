"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreeterLive = exports.Greeter = void 0;
const effect_1 = require("effect");
exports.Greeter = effect_1.Context.Tag("@app/core/Greeter");
exports.GreeterLive = effect_1.Layer.succeed(exports.Greeter, exports.Greeter.of({
    greet: effect_1.Effect.succeed("Hello, World!").pipe(effect_1.Effect.withSpan("Greeter.greet")),
}));
