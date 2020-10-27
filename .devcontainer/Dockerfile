# [Choice] Ubuntu version: bionic, focal
ARG VARIANT=focal
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends git gcc cmake gcc-arm-none-eabi binutils-arm-none-eabi
    
# [Optional] Uncomment if you want to install more global node packages
RUN sudo -u node npm install -g pxt

