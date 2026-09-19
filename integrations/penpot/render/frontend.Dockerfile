FROM penpotapp/devenv:latest AS builder
USER root
WORKDIR /home/penpot/penpot
COPY vendor/penpot/ .
RUN chown -R penpot:penpot .
USER penpot
RUN cd frontend && ./scripts/build 2.17.0

FROM penpotapp/frontend:2.17.0
USER root
COPY --from=builder /home/penpot/penpot/frontend/target/dist /var/www/app/
RUN chown -R 1001:0 /var/www/app && chmod -R g+w /var/www/app
USER penpot
