## Simple Form

Simple Form that includes photo image chooser, contact information submission on iOS, Android, and web.

![ios](http://i.giphy.com/l3vRgsAmaPfXYCtJS.gif)
![android](http://i.giphy.com/26FL8vBDV3vzgLiOQ.gif)

Here is the stack of technology of this repo:

- ReactJS
- React Native
- React Native Web: to share code across web and mobile app
- Redux: to maintain tab view state, form validation

## Animation & Interaction

- Image Popup: it can notify user while the image is being processed.

- Sliding tab indicator: it can clearly show the current state of the steps and user can easily navigate back or forward

- Text Input sequence and error focus: it can help users filling the form without scrolling and focus on the error field

## Display on various screen sizes

![ss](https://cdn.rawgit.com/sonnylazuardi/simple-form/master/screenshots/ss1.png)
![ss](https://cdn.rawgit.com/sonnylazuardi/simple-form/master/screenshots/ss2.png)
![ss](https://cdn.rawgit.com/sonnylazuardi/simple-form/master/screenshots/ss3.png)
![ss](https://cdn.rawgit.com/sonnylazuardi/simple-form/master/screenshots/ss4.png)
![ss](https://cdn.rawgit.com/sonnylazuardi/simple-form/master/screenshots/ss5.png)
![ss](https://cdn.rawgit.com/sonnylazuardi/simple-form/master/screenshots/ss6.png)

## Running on device

install React Native cli globally
- `npm i -g react-native-cli`

install dependencies
- `npm install`

run on device
- `react-native run-ios`
- `react-native run-android`

## Running on Exponent

Try the demo: http://exp.host/@sonnylazuardi/simpleform
The exponent source is on `exponent` branch

## Running on web

- change `.babelrc` so that it contains `.babelrcweb`
- For development mode: `npm run dev`
- For production mode: `npm run build`
- `cd web/public && python -m SimpleHTTPServer 8000`
- open `http://localhost:8000` on browser

or open the demo on github pages of this repo http://sonny.js.org/simple-form/
