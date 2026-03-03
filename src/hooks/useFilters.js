import { useState } from 'react'

export function useFilters() {
  const [dialect, setDialect] = useState('both')   // 'north' | 'south' | 'both'
  const [register, setRegister] = useState('both') // 'formal' | 'informal' | 'both'
  const [tense, setTense] = useState('present')

  return { dialect, setDialect, register, setRegister, tense, setTense }
}
