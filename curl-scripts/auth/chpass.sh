#!/bin/bash
# curl --include  --request PATCH http://tic-tac-toe.wdibos.com/change-password/ \
#   --header "Authorization: Token token=$TOKEN" \
#   --header "Content-Type: application/json" \
#   --data '{
#     "passwords": {
#       "old": "'"${OLD_PASSWORD}"'",
#       "new": "'"${NEW_PASSWORD}"'"
#     }
#   }'
curl --include --request PATCH https://tic-tac-toe-wdi.herokuapp.com/change-password/ \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'
echo
# OLD_PASSWORD="123456" NEW_PASSWORD="654321" TOKEN="BAhJIiVlOGJmYzE0MDcxNzNhOTM4Y2IwZWFkMzIyNTAzYzNkNAY6BkVG--3afd76d310d740800304bc9c011e2ead3da71be1" sh curl-scripts/chpass.sh