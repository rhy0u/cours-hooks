import React from 'react'
import Input from './components/Input'
import Counter from './components/Counter'
import Fetch from './components/Fetch'
import DataLoader from './components/DataLoader'
import axios from 'axios'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
      }}
    >
      <DataLoader
        request={async () =>
          axios.get('https://swapi.co/api/people/').then(data => data.data)
        }
      >
        {({ loading, data, error }) => (
          <>
            <Fetch />
            <Input />
            <Counter step={-3} />
          </>
        )}
      </DataLoader>
    </div>
  )
}

export default App
