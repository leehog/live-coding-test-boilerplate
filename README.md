This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live coding test

### Get started

    $ npm install

    $ npm start

## Dependencies

we have pre-installed some dependencies tthat you should use

    axios
    grommet (component library)

### Assignment

The goal is to create a simple react app, using: create-react-app, axios & styled-components. <br />
The app will consist of one page where the user can select a city and view the current weather at the chosen location. <br /> 
The app should be “desktop first” but work in mobile too. 
You will use the “darkSky” api to fetch the current weather.

### Wireframe

<img src='/src/images/wireframe.jpg' />

Depending on the weather you will display an image that fits the current weather & temperature. <br />
Response example: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night

<img src='/src/images/weather-icons.png' />

### Example

(You will have a list of predefined coordinates)
https://api.darksky.net/forecast/[key]/[latitude],[longitude]

You will also display the Chosen city: name, temperature, “what it feels like temperature”.
Full response: https://darksky.net/dev/docs#response-format

Extra: Let’s pretend we only get celsius from the endpoint, write a function so that the user can convert the celsius-temperature to fahrenheit. Formula: (0°C × 9/5) + 32 = 32°F
