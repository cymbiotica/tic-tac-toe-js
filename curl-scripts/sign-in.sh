# sh curl-scripts/json/sign-in.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials" : {
        "email": "'"${EMAIL}"'",
        "password" : "'"${PASSWORD}"'"
        }
  }'

echo


# tesposito@TINFU:~/generalAssembly/wdi/trainings/jquery-ajax-token-auth (training)$EMAIL="terry@terry.com" PASSWORD="123456" sh curl-scripts/json/sign-in.sh
# HTTP/1.1 200 OK
# Server: Cowboy
# Date: Wed, 20 Jun 2018 14:46:40 GMT
# Connection: keep-alive
# Content-Type: application/json; charset=utf-8
# Etag: W/"4c35c52b70665b082a190496bb491944"
# Cache-Control: max-age=0, private, must-revalidate
# X-Request-Id: df845964-0362-48c7-9126-b0ed624b6e5d
# X-Runtime: 0.080054
# Vary: Origin
# Transfer-Encoding: chunked
# Via: 1.1 vegur

# {"user":{"id":32,"email":"terry@terry.com","token":"BAhJIiViZDMxNjQ2M2ZhMWM0ZmRlYjg1NDRmYWIxZjE0YTExYwY6BkVG--a9f8f8ebd4e9bc8e068ac679fc9c5be885b178b4"}