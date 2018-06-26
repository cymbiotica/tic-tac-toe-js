# sh curl-scripts/json/sign-up.sh
# EMAIL="terry.esposito2@gmail.com" PASSWORD="xxxxxx" PASSWORD_CONFIRM="xxxxxx" sh curl-scripts/json/sign-up.sh
curl "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "credentials" : {
        "email": "'"${EMAIL}"'",
        "password" : "'"${PASSWORD}"'",
        "password_confirmation" : "'"${PASSWORD_CONFIRM}"'"
        }
    }'

echo
