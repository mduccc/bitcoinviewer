const server_module = require('./app')
const data_bitcoin_modules = require('./app_modules/getDataBitcoin')
const get_date_modules = require('./app_modules/getDate')

var server = new server_module()
var app = server.server()
var data_bitcoin = new data_bitcoin_modules()
var get_date = new get_date_modules()

app.set('views', './public/views')
app.set('view engine', 'pug')

app.get('/', function(req, res, next){
	//var uri = 'https://blockchain.info/ticker'
	var uri = 'https://graphs2.coinmarketcap.com/currencies/bitcoin/'
	data_bitcoin.get(uri, function(result){
		//console.log('data in template: ' + result)
		var bc_now = result.price_usd[result.price_usd.length-1][1]
		var Xbar = []
		var Ybar = []
		for(i = 0; i<result.price_usd.length; i++){
			if(i >= result.price_usd.length - 15){
				Xbar.push('"'+get_date.get(result.price_usd[i][0])+'"')
				Ybar.push(result.price_usd[i][1])
			}
		}
		var send_data = {
			bitcoin_now: bc_now,
			xbar: Xbar,
			ybar: Ybar
		}
		res.render('index', {data: send_data})
			console.log(Xbar)

	})
})