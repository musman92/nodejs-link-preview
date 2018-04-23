module.exports = {
	getMedia(pageUrl) {
		media = false;
		if (pageUrl.indexOf('youtube.com') != -1) {
			media = this.mediaYoutube(pageUrl);
		} else if (pageUrl.indexOf('ted.com') != -1) {
			media = this.mediaTED(pageUrl);
		} else if (pageUrl.indexOf('vimeo.com') != -1) {
			media = this.mediaVimeo(pageUrl);
		} else if (pageUrl.indexOf('dailymotion.com') != -1) {
			media = this.mediaDailymotion(pageUrl);
		}
		return media;
	},
	mediaYoutube(url) {
		media = '';
		let tokens = url.split('v=')
		if (tokens[1]) {
			media = "http://www.youtube.com/embed/" + tokens[1]
		}
		return media;
	},
	mediaTED(url) {
		url = url.split('/')
		media = '';
		if (url.length > 0) {
			url = url[url.length - 1];
			url = url.split('?');
			if (url.length > 0) {
				media = 'https://embed-ssl.ted.com/talks/' + url[0]
			}
		}
		return media;
	},
	mediaVimeo(url) {
		url = url.replace('https://', '');
		url = url.replace('http://', '');
		let breakUrl = url.split('/')
		media = '';
		if (breakUrl[1] != "") {
			media = 'http://player.vimeo.com/video/' + breakUrl[1];
		}
		return media;
	},
	mediaDailymotion(url) {
		media = '';
		token = url.split('/');
		if (token.length) {
			media = 'http://www.dailymotion.com/embed/video/' + token[token.length - 1];
		}
		return media;
	}
}