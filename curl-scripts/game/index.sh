curl --include --request GET https://tic-tac-toe-wdi.herokuapp.com/games/ \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{}'