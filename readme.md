## Simple Form

Simple Form that run on iOS, android, and web.

Here is the stack of technology of this repo:

- ReactJS
- React Native
- React Native Web: to share code across web and mobile app
- Redux: to maintain tab view state, form validation

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
