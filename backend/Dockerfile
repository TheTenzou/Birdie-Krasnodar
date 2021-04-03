# Base image
FROM python:3.8.8-alpine

# set directory
WORKDIR /usr/src/birdie

# set enviroment variable
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# GDAL GEOS
RUN apk add --no-cache geos gdal
# install psycopg2
RUN apk add --no-cache postgresql-dev gcc python3-dev musl-dev

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh .

# copy project
COPY . .

# run entrypoint.sh
ENTRYPOINT [ "/usr/src/birdie/entrypoint.sh" ]