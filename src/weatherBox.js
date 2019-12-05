import React from 'react'
import styled from 'styled-components'
import { Text } from 'grommet'
import partlyCloudyDay from './images/ic_partly-cloudy-day.png'
import partlyCloudyNight from './images/ic_partly-cloudy-night.png'
import clearDay from './images/ic_clear-day.png'
import clearNight from './images/ic_clear-night.png'
import cloudy from './images/ic_cloudy.png'
import rain from './images/ic_rain.png'
import sleet from './images/ic_sleet.png'
import snow from './images/ic_snow.png'
import wind from './images/ic_wind.png'
import partlysunnyRain from './images/ic_partly-sunny-rain.png'
import thunder from './images/ic_thunder.png'

const Container = styled.div`
  display: flex;
`

const WeatherIcon = styled.img`
    width: 70px;
    height: 70px;
`

const weathersIcons = {
  'partly-cloudy-day': partlyCloudyDay,
  'partly-cloudy-night': partlyCloudyNight,
  'clear-day': clearDay,
  'clear-night': clearNight,
  'cloudy': cloudy,
  'rain': rain,
  'sleet': sleet,
  'snow': snow,
  'wind': wind,
  'partly-sunny-rain': partlysunnyRain,
  'thunder': thunder
}

function weatherBox() {
  return (
    <Container>
        <Text>Current weather</Text>
        <WeatherIcon src={weathersIcons['clear-day']} alt='' />
    </Container>
  )
}

export default weatherBox
