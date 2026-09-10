import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Book } from './pages/Book'
import { Home } from './pages/Home'
import { Insights } from './pages/Insights'
import { UseCases } from './pages/UseCases'
import { Work } from './pages/Work'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="use-cases" element={<UseCases />} />
          <Route path="insights" element={<Insights />} />
          <Route path="book" element={<Book />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
