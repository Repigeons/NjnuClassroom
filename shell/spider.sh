#!/usr/bin/sh

# environment variables
export env=pro


source env/bin/activate
python /usr/local/src/NjnuClassroom/manage.py --run Spider --log /var/log/NjnuClassroom/spider.log

# post a request to server for latest data
curl -X POST http://localhost:8001/reset
