import React from 'react'
import styled from 'styled-components'
import { Text } from 'grommet'
import partlyCloudyDay from './images/ic_ partly-cloudy-day.png'

const Container = styled.div`
  display: flex;
`

const WeatherIcon = styled.img`
    width: 70px;
    height: 70px;
`
function weatherBox() {
  return (
    <Container>
        <Text>Current weather</Text>
        <WeatherIcon src={partlyCloudyDay} alt='' />
    </Container>
  )
}

export default weatherBox
