function BiStorage()
{
	this.data = {}
}

BiStorage.prototype.get = function(key)
{
	let self = this
	let result = null

	if (!key.length) throw new Error("Key is empty")

	let firstLetter = key.split("")[0]
	if ( typeof self.data[firstLetter] === 'undefined')
		self.data[firstLetter] = {}

	if (key.length > 1) {
		let secondLetter = key.split("")[1]
		if ( typeof self.data[firstLetter][secondLetter] === 'undefined')
			self.data[firstLetter][secondLetter] = {}

		if ( typeof self.data[firstLetter][secondLetter][key] !== 'undefined')
			result = self.data[firstLetter][secondLetter][key]
	} else {
		if ( typeof self.data[firstLetter][key] !== 'undefined')
			result = self.data[firstLetter][key]
	}

	return result
}

BiStorage.prototype.set = function(key, value)
{
	let self = this

	if (!key.length) throw new Error("Key is empty")

	let firstLetter = key.split("")[0]
	if ( typeof self.data[firstLetter] === 'undefined')
		self.data[firstLetter] = {}

	if (key.length > 1) {
		let secondLetter = key.split("")[1]
		if ( typeof self.data[firstLetter][secondLetter] === 'undefined')
			self.data[firstLetter][secondLetter] = {}

		self.data[firstLetter][secondLetter][key] = value
	} else {
		self.data[firstLetter][key] = value
	}
}

module.exports = BiStorage
