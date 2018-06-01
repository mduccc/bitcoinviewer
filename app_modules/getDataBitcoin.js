class GetDataBitcoin{
	get(uri, callback){
		const https = require('https')
		var result = ''
		https.get(uri, function(res){
			let data = ''

			res.on('data', function(chunk){
				data += chunk
			})

			res.on('end', function(){
				var json = JSON.parse(data)
				callback(json)
			})
		}).on('error', function(err){
			console.log('err')
		})
	}
}

module.exports = GetDataBitcoin