import { Effect } from "effect"
import { Greeter, GreeterLive } from "@app/core/Greeter"

describe("Greeter", () => {
  it("should greet", () =>
    Effect.gen(function* (_) {
      const greeter = yield* _(Greeter)
      expect(yield* _(greeter.greet)).toEqual("Hello, World!")
    }).pipe(Effect.provideLayer(GreeterLive), Effect.runPromise))
})
