import React, { useState } from 'react'
import styled from 'styled-components'
import { Select } from 'grommet'
import { Text } from 'grommet'
import WeatherBox from './weatherBox'
import { Locations } from './coordinates'

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
  
  // Locations is a key/value object which contains keys (location names) 
  // and values (location coordinates)
  console.log(Locations)

  const handleChange = (city) => {
    setLocation(city)
  }

  return (
    <Container>
      <LocationWrapper>
        <Text>Coose location</Text>
        <Select
          options={[/* Add locations here */]}
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
