import './App.css'
import { useEffect } from 'react/cjs/react.production.min'
import fetchUser from './services/user'
import { useUser } from './context/UserContext'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'

function App() {
  const { user, setUser } = useUser({})
  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [setUser])
  return (
    <Layout user={user}>
      <Home user={user} />
    </Layout>
  )
}

export default App
