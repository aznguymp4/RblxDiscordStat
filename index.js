const fetch = require('node-fetch')
const config = require('./config.json')
const deviceTypes = ['Computer','Tablet','Phone','Console']

setInterval(() => {
	config.games.map(async game => {
		const res = await fetch(`https://develop.roblox.com/v1/universes/${game.gameID}/live-stats`, {
			headers: { cookie: `.ROBLOSECURITY=${config.TOKEN}` },
			method: 'GET'
		})
		res.json().then(json => {
			fetch(game.webhookURL, {
				headers: {'Content-Type': 'application/json'},
				method: 'POST',
				body: JSON.stringify({
					embeds: [{
						title: `${json.totalPlayerCount} visitors in ${json.gameCount} server${json.gameCount==1?'':'s'}`,
						color: 5793266,
						description: deviceTypes.map(t => { return `${t}: ${json.playerCountsByDeviceType[t]}` }).join('\n'),
						timestamp: new Date().toISOString()//,
						//url: `https://www.roblox.com/games/${game.gameID}/`
					}]
				})
			})
		})
	})
}, config.checkIntervalSec*1000)
