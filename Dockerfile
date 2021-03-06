FROM projectasiago/rustbuildenv:wasm32-unknown-unknown

WORKDIR /usr/src/mish-web

COPY . .

RUN make

FROM nginx:1.13.9

COPY --from=0 /usr/src/mish-web/dist /usr/share/nginx/html