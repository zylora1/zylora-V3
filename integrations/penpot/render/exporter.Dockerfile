FROM penpotapp/devenv:latest AS builder
USER root
WORKDIR /home/penpot/penpot
COPY vendor/penpot/ .
RUN chown -R penpot:penpot .
USER penpot
RUN cd exporter && ./scripts/build 2.17.0

FROM penpotapp/exporter:2.17.0
USER root
COPY --from=builder --chown=penpot:penpot /home/penpot/penpot/exporter/target /opt/penpot/exporter/
USER penpot
RUN cd /opt/penpot/exporter && ./setup
