import { useEffect, useState} from 'react'

const useLocalStorage = (key: string, initialValue: [] = []) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]) 
  return [value, setValue]
}

export default useLocalStorage