class GetDate{
	get(timestamp){
		var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
		var new_date = new Date(timestamp)
		var month = months_arr[new_date.getMonth()]
		var day = new_date.getDate()

		var date = month + ' ' + day
		return date
	}
}

module.exports = GetDate