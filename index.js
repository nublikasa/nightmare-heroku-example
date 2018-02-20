const Nightmare = require('nightmare')

console.log('Nightmare script started')
console.log('==========')

Nightmare({
	show: process.env.NODE_ENV == 'development' || false
})
	.goto('https://blog.oscarmorrison.com/nightmarejs-on-heroku-the-ultimate-scraping-setup/')
	.wait('.post-title')
	.evaluate(() => document.querySelector('.post-title').textContent)
	.end()
	.then(result => {
		console.log(result)
		console.log('=========')
		console.log('All done')
	})
	.catch(error => console.error(error))
	.then(() => (console.log('Process exits'), process.exit()))