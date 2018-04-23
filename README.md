# nodejs-link-preview
a node service that will take a url as a input and give you a json response to show linke preview like chat app show i.e. slack, skype etc.

if url is a video link, then video contain embed url if its not video link then video is false,
below is the few examples

# youtube url
```
/preview-link?url=https://www.youtube.com/watch?v=6QsIvzS4_ws
```
output look like this
```
{
    "canonicalUrl": "www.youtube.com",
    "title": "2018 FIFA World Cup Russia (Preview) ᴴᴰ",
    "url": "https://www.youtube.com/watch?v=6QsIvzS4_ws",
    "description": "I DO NOT OWN THE RIGHTS TO THE CLIPS OR MUSIC. ALL RIGHTS BELONG TO THEIR RESPECTFUL OWNERS. This video is not intended to violate any Condition of Use. Copy...",
    "image": "https://i.ytimg.com/vi/6QsIvzS4_ws/maxresdefault.jpg",
    "video": "http://www.youtube.com/embed/6QsIvzS4_ws"
}
```
# medium url
```
/preview-link?url=https://medium.com/@ervib/deploy-angular-4-app-with-express-to-heroku-6113146915ca
```
output 
```
{
    "canonicalUrl": "medium.com",
    "title": "Deploy Angular 4 app with Express to heroku – Ervi B – Medium",
    "url": "https://medium.com/@ervib/deploy-angular-4-app-with-express-to-heroku-6113146915ca",
    "description": "Angular 4 is out? I worked with AngularJS a while back.",
    "image": "https://cdn-images-1.medium.com/max/1200/1*wkmH76VewMAl-6NwrLxjcQ.png",
    "video": false
}
```
api service that give you a link preview 
