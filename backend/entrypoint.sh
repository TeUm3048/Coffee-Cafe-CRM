if [ ! -d './migrations' ]; then
    python src/manage.py db init
    python src/manage.py db migrate
fi &&
    python src/manage.py db upgrade &&
    gunicorn --bind 0.0.0.0:8080 src.app:app
