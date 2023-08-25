FROM alpine

ENV NODE_ENV=production

RUN addgroup -g 1000 node \
	&& adduser -u 1000 -G node -s /bin/sh -D node \
	&& mkdir /app \
	&& chown -R node:node /app

WORKDIR /app

COPY --chown=node:node build/pkg/@app/http-alpine /app

USER node

CMD ["/app/http-alpine"]
