import React from 'react'
import { useAddEventListeners } from '@swaraj0_0/add-event-listener-hook'

const App = () => {
  useAddEventListeners('SwarajGK')
  return (
    <div>
      This is for another testing thing
    </div>
  )
}
export default App
