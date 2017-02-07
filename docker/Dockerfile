FROM ubuntu:16.04
MAINTAINER dergachovda@gmail.com

RUN apt-get update && apt-get install -y apache2 supervisor git
RUN mkdir -p /var/lock/apache2 /var/run/apache2 /var/log/supervisor
RUN rm -r /var/www/html
RUN cd /var && git clone https://github.com/ecity-game/web.git && cp -r ./web/dist /var/www/html

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 80

CMD ["/usr/bin/supervisord"]
