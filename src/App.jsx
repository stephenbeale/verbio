import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { VerbDetail } from './pages/VerbDetail.jsx'

export default function App() {
  return (
    <BrowserRouter basename="/verbio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verb/:id" element={<VerbDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
