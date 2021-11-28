# Generated by Django 3.1.6 on 2021-11-28 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mcfit', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profiles',
            fields=[
                ('profile_id', models.AutoField(primary_key=True, serialize=False)),
                ('emergency_contact', models.TextField(blank=True, null=True)),
                ('fitness_goal', models.TextField(blank=True, null=True)),
                ('gender', models.TextField(blank=True, null=True)),
                ('body_type', models.TextField(blank=True, null=True)),
                ('weight', models.IntegerField(blank=True, null=True)),
                ('dob', models.DateField(blank=True, null=True)),
                ('height', models.IntegerField(blank=True, null=True)),
                ('physical_activity', models.TextField(blank=True, null=True)),
                ('diet', models.TextField(blank=True, null=True)),
                ('photo', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'profiles',
                'managed': False,
            },
        ),
    ]
