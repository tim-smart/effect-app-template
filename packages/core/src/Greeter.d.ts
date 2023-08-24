import { Context, Effect, Layer } from "effect";
export interface Greeter {
    readonly greet: Effect.Effect<never, never, string>;
}
export declare const Greeter: Context.Tag<Greeter, Greeter>;
export declare const GreeterLive: Layer.Layer<never, never, Greeter>;
