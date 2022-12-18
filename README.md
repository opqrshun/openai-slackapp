
# Slack Configuration

## Setting Event Subscriptions

- 
- Enable Events in Event Subscriptions
  - Add app_mention in Subscribe to bot events
  

## Scopes in OAuth & Permissions

Redirect URL
 - `https://{HOST_URL}/slack/redirect`

Scopes
- app_mentions:read
- chat:write
- im:write



## ENVIRONMENT

.env

```
HOST_URL = 
OPENAI_API_KEY =
SLACK_SIGNING_SECRET=
SLACK_CLIENT_ID = 
SLACK_CLIENT_SECRET =
```


## Run server

```
npm i
node index.js

```
