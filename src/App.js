import React, { useState } from 'react'
import styled from 'styled-components'
import { Select } from 'grommet'
import { Text } from 'grommet'
import WeatherBox from './weatherBox'

const locations = ['Stockholm']

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`

function App() {
  const [location, setLocation] = useState('')

  const handleChange = (city) => {
    setLocation(city)
  }

  return (
    <Container>
      <LocationWrapper>
        <Text>Coose location</Text>
        <Select
          options={locations}
          value={location}
          onChange={({ value }) => handleChange(value)}
        />
      </LocationWrapper>
      {
        location && <WeatherBox />
      }
    </Container>
  )
}

export default App
