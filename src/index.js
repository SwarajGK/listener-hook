import { useState, useEffect } from 'react'
const request = require('request-promise')

export const useAddEventListeners = (userName) => {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState({})
  useEffect(() => {
    setLoading(true)
    async function fetchGithubUser(userName) {
      const response = await request(`https://api.github.com/users/${userName}`)
      setUserData(response)
      setLoading(false)
    }
    fetchGithubUser(userName)
  }, [])
  return { loading, userData }
}
