const Regex = require('./Regex.js');

module.exports = {
    isImage(url) {
        return Regex.IMAGE_PREFIX_REGEX.test(url)
    },
    canonicalPage(url) {
        canonical = "";

        if (url.indexOf('http://') != -1) {
            url = url.replace('http://', '');
            url = url.replace('HTTP://', '');
        }

        if (url.indexOf('https://') != -1) {
            url = url.replace('https://', '');
            url = url.replace('HTTPS://', '');
        }

        for (i = 0; i < url.length; i++) {
            if (url[i] != "/")
                canonical += url[i];
            else
                break;
        }
        return canonical;
    }
}