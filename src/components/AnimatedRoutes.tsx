import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Pronunciation from '../pages/Pronunciation'

const FADE_MS = 500

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [visible, setVisible] = useState(false)
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      requestAnimationFrame(() => setVisible(true))
      return
    }

    if (location.key === displayLocation.key) return

    setVisible(false)

    const timeout = window.setTimeout(() => {
      setDisplayLocation(location)
      requestAnimationFrame(() => setVisible(true))
    }, FADE_MS)

    return () => window.clearTimeout(timeout)
  }, [location, displayLocation])

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Homepage />} />
        <Route path="/pronunciation" element={<Pronunciation />} />
      </Routes>
    </div>
  )
}

export default AnimatedRoutes
