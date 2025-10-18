# HNG Backend Stage 0 — Dynamic Profile API

## Overview
This simple RESTful API returns my profile information along with a dynamic cat fact from [catfact.ninja](https://catfact.ninja/fact).

---
## setup instructions
To download packages run "pnpm install"


To initailize project run "pnpm run dev"

the server url will appear on the terminal or you can just copy and visit the one below


## Server Url
http://localhost:3000/me 

## Endpoint
*GET* /me

*Response Example:*
```json
{
  "status": "success",
  "user": {
    "email":"your-email@example.com",
    "name": "Your-name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T09:25:41.198Z",
  "fact": "Cats sleep 70% of their lives."
}