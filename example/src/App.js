import React from 'react'
import { useMyHook } from '@swaraj0_0/add-event-listener-hook'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App