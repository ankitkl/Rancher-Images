FROM ubuntu:14.04

MAINTAINER ankitkumar <xyz@gmail.com>

# make sure apt is up to date
RUN apt-get update

# install nodejs and npm
RUN apt-get install -y nodejs npm git git-core

ADD start.sh /tmp/ 
ADD index.js /tmp/
ADD package.json /tmp/

RUN chmod +x /tmp/start.sh

CMD /tmp/start.sh
