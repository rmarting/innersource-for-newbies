FROM node:latest
LABEL name="InnerSource for Newbies" \
      description="Site to introduce newbies into InnerSource principles" \
      Managed-By="InnerSource Commons" \
      Mantainer="InnerSource Commons" \
      vcs-url="https://github.com/rmarting/innersource-for-newbies.git"
WORKDIR /docs
RUN npm install -g docsify-cli@latest
COPY ./docs /docs
EXPOSE 3000/tcp
ENTRYPOINT docsify serve .
