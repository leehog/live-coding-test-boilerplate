import React, { useState } from 'react'
import styled from 'styled-components'
import { Select } from 'grommet'
import { Text } from 'grommet'

const locations = ['Stockholm']

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
function App() {
  const [location, setLocation] = useState('')

  const handleChange = (city) => {
    setLocation(city)
    // Make api request
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
      
    </Container>
  )
}

export default App
