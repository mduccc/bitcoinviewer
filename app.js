class App{

	server(){
		const express = require('express')
		const app = express()

		app.listen(3000, () => console.log('opened port 3000'))

		return app
	}
}

module.exports = App