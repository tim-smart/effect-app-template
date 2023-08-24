import { Greeter, GreeterLive } from "@app/core/Greeter"
import * as Http from "@effect/platform-node/HttpServer"
import { runMain } from "@effect/platform-node/Runtime"
import { Config, Effect, Layer } from "effect"
import { createServer } from "http"

const serve = Http.router.empty.pipe(
  Http.router.get(
    "/hello",
    Effect.gen(function* (_) {
      const greeter = yield* _(Greeter)
      const greeting = yield* _(greeter.greet)
      return Http.response.text(greeting)
    }),
  ),

  Effect.catchTags({
    RouteNotFound: () => Effect.succeed(Http.response.empty({ status: 404 })),
  }),

  Effect.catchAllCause(cause =>
    Effect.as(
      Effect.logError("unhandled http error", cause),
      Http.response.empty({ status: 500 }),
    ),
  ),

  Http.server.serve(Http.middleware.loggerTracer),
)

const HttpLive = Layer.scopedDiscard(serve)

const ServerLive = Http.server.layerConfig(createServer, {
  port: Config.withDefault(Config.integer("PORT"), 3000),
})

const MainLive = HttpLive.pipe(Layer.use(ServerLive), Layer.use(GreeterLive))

Layer.launch(MainLive).pipe(Effect.tapErrorCause(Effect.logError), runMain)
