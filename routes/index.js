const express = require('express')
const router = express.Router()

const Url = require('../models/url')

// @route          GET /:code
// @description    Redirect to long/original Url
router.get('/:code', async (req, res) => {
	try {
		const url = await Url.findOne({ urlCode: req.params.code })
		
		if(url) {
		   return res.redirect(url.longUrl)
		} else {
		   return res.status(404).json('No url found')
		}
	} catch {
		console.error(err);
		res.status(500).json('Server error');
	}
})

module.exports = router