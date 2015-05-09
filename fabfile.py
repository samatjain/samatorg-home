import os

from fabric.api import cd, env, local, parallel, run, settings
from fabric.contrib.project import rsync_project

env.hosts = ['claudius']

base_dir = os.path.dirname(os.path.abspath(__file__))

@parallel
def deploy():
    local('make')
    remote_path = '/home/xjjk/sites/samat.org/public'
    rsync_project(
            local_dir= base_dir + '/output/',
            remote_dir=remote_path,
            exclude=['.git', '.gitignore', 'fabfile.py*', 'update.sh'],
            #delete=True
            )
