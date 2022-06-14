# RblxDiscordStat
Track how many players are in your Roblox game(s) through Discord Webhooks in real time.
## Note
In Roblox terms, "game", "experience", and "universe" are all defined as the same thing internally. For simplicity, I will be using "game" when referring to any of these.
### However, "game" and "place" are two different things.

# Getting Started
**Setting up** `config.json`
```js
"games": []
// This is the array of each game that will be tracked in real time.
```
```js
{
  "gameID": 1234567890,
  "webhookURL": "https://discord.com/api/webhooks/channelID/xxxxx?thread_id=threadID"
}
// This is the object that will go in the "games" array.
// Game ID is not the same thing as Place ID
// "webhookURL" supports the ?thread_id= parameter
```
```js
"TOKEN": "..."
// This is the .ROBLOSECURITY cookie (account token) saved in your browser.
// It will be used in order to fetch the live stats for each game.
// Note: The account used must have edit access to the games.
```

**Starting the "bot"**
### Dependencies
- `node-fetch` (Version `v3.x.x` will NOT work! Use `v2.x.x`!)
- (`node-fetch@2.6.7` recommended)
