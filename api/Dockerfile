FROM alpine:latest
MAINTAINER Ivan Pedrazas <ipedrazas@gmail.com>

# basic flask environment
RUN apk add --no-cache nginx uwsgi uwsgi-python py-pip \
	&& pip install --upgrade pip \
	&& pip install flask flask-cors

COPY . /api

CMD ["python", "/api/app.py"]
