FROM penpotapp/devenv:latest AS builder
USER root
WORKDIR /home/penpot/penpot
COPY vendor/penpot/ .
RUN chown -R penpot:penpot .
USER penpot
RUN cd backend && ./scripts/build 2.17.0

FROM penpotapp/backend:2.17.0
USER root
COPY --from=builder /home/penpot/penpot/backend/target/dist /opt/penpot/backend/
RUN chown -R penpot:penpot /opt/penpot/backend
USER penpot
