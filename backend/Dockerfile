FROM python:3.7-alpine

WORKDIR /app

RUN apk add gcc build-base musl-dev python3-dev libffi-dev openssl-dev libpq-dev

RUN python -m pip install --upgrade --no-cache-dir pip

COPY ./requirements.txt /app/src/

RUN python -m pip install --no-cache-dir -r ./src/requirements.txt

COPY ./src/ /app/src

WORKDIR /app

ENV FLASK_APP=/app/src/app.py

EXPOSE 8080

CMD ["gunicorn", "--bind", "0.0.0.0:8080", "src.app:app"]
