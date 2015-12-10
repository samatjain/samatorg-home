import os

from fabric.api import cd, env, local, parallel, run, settings, task
from fabric.contrib.project import rsync_project

env.hosts = ['claudius']

base_dir = os.path.dirname(os.path.abspath(__file__))

@task
def clean():
    local('rm -rf output tmp')

@task
def build():
    clean()
    local(os.path.join(base_dir, 'node_modules/.bin/broccoli build output'))

@task
def deploy():
    build()
    remote_path = '/home/xjjk/sites/samat.org/public'
    rsync_project(
            local_dir= base_dir + '/output/',
            remote_dir=remote_path,
            exclude=['.git', '.gitignore', 'fabfile.py*', 'update.sh'],
            delete=True
            )
