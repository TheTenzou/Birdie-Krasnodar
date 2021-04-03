FROM python:3.8.8-alpine

WORKDIR /usr/src/birdie

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# RUN apk update -y && apt-get upgrade -y

# RUN apk add --no-cache gdal-bin libgdal-dev
# RUN apk add -y python3-gdal
# RUN apk add -y binutils libproj-dev

# RUN apt-get install -y netcat
RUN apk add --no-cache geos gdal
RUN apk add --no-cache postgresql-dev gcc python3-dev musl-dev

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./entrypoint.sh .

COPY . .

ENTRYPOINT [ "/usr/src/birdie/entrypoint.sh" ]