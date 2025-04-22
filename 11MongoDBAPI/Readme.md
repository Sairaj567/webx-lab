node server.js

curl -X POST http://localhost:5000/users \
-H "Content-Type: application/json" \
-d '{"name": "Alice", "email": "alice@example.com", "age": 25}'

curl http://localhost:5000/users
