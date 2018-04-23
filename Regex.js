module.exports = {
    URL_REGEX : /((https?|ftp)\:\/\/)?([a-z0-9+!*(),;?&=\$_.-]+(\:[a-z0-9+!*(),;?&=\$_.-]+)?@)?([a-z0-9-.]*)\.([a-z]{2,3})(\:[0-9]{2,5})?(\/([a-z0-9+\$_\-~@\(\)\%]\.?)+)*\/?(\?[a-z+&\$_.-][a-z0-9;:@&#%=+\/\$_.-]*)?(#[a-z_.-][a-z0-9+\$_.-]*)?/i,
    IMAGE_REGEX : "/<img(.*?)src=(\"|\')(.+?)(gif|jpg|png|bmp)(.*?)(\"|\')(.*?)(\/)?>(<\/img>)?/",
    IMAGE_PREFIX_REGEX : /.(jpg|png|gif|bmp)$/i,
    SRC_REGEX : '/src=(\"|\')(.+?)(\"|\')/i',
    HTTP_REGEX : "/https?\:\/\//i",
    CONTEXT_REGEX_1 : '/content="(.*?)"/i',
    CONTENT_REGEX_2 : "/content='(.*?)'/i",
    META_REGEX : '/<meta(.*?)>/i',
    TITLE_REGEX : "/<title(.*?)>(.*?)<\/title>/i",
    SCRIPT_REGEX : "/<script(.*?)>(.*?)<\/script>/i"
}