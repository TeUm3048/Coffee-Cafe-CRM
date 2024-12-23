FROM python:3.7-alpine as builder

RUN apk add --no-cache \
    gcc \
    build-base \
    musl-dev \
    python3-dev \
    libffi-dev \
    openssl-dev \
    libpq-dev

WORKDIR /app

RUN python -m pip install --upgrade --no-cache-dir pip

COPY ./requirements.txt /app/

RUN python -m pip install --prefix=/install --no-cache-dir -r ./requirements.txt

FROM python:3.7-alpine

RUN apk add --no-cache \
    libffi \
    openssl \
    libpq

WORKDIR /app

COPY --from=builder /install /usr/local

COPY . /app

ENV FLASK_APP=/app/src/app.py
ENV PYTHONPATH=/app/src

EXPOSE 8080

CMD ["sh", "entrypoint.sh"]
