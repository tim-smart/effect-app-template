import { Context, Effect, Layer } from "effect"

export interface Greeter {
  readonly greet: Effect.Effect<never, never, string>
}
export const Greeter = Context.Tag<Greeter>("@app/core/Greeter")

export const GreeterLive = Layer.succeed(
  Greeter,
  Greeter.of({
    greet: Effect.succeed("Hello, World!").pipe(
      Effect.withSpan("Greeter.greet"),
    ),
  }),
)
