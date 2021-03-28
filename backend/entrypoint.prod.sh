#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "Postgres started"
fi

python manage.py migrate
python manage.py createsuperuser --no-input
python manage.py collectstatic --clear --no-input

exec "$@"