FROM python:3.7-alpine

WORKDIR /app

RUN apk add gcc build-base musl-dev python3-dev libffi-dev openssl-dev libpq-dev

RUN python -m pip install --upgrade --no-cache-dir pip

COPY ./requirements.txt /app/

RUN python -m pip install --no-cache-dir -r ./requirements.txt

COPY . /app

WORKDIR /app

ENV FLASK_APP=/app/src/app.py
ENV PYTHONPATH=/app/src


EXPOSE 8080

CMD [ "sh", "entrypoint.sh" ]