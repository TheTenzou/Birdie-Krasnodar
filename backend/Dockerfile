FROM python:3.8.8-buster

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update -y && apt-get upgrade -y

RUN apt-get install -y gdal-bin libgdal-dev
RUN apt-get install -y python3-gdal
RUN apt-get install -y binutils libproj-dev

RUN apt-get install -y netcat


RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./entrypoint.sh .

COPY . .

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]