# Generated by Django 3.1.1 on 2020-11-23 05:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0025_auto_20201122_2302'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='news_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='news_type', to='backend.newstype'),
        ),
        migrations.AlterField(
            model_name='newspicture',
            name='news',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='news_pictures', to='backend.news'),
        ),
    ]