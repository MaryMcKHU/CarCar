# Generated by Django 4.0.3 on 2022-06-18 06:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_rename_vin_appointment_automobile'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='owner',
            new_name='customer_name',
        ),
    ]
