import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CasePage from './pages/CasePage.tsx'
import { allCases } from './data/caseStudies'
import { LanguageProvider } from './contexts/LanguageContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<App />} />
          {allCases.map(study => (
            <Route key={study.id} path={study.path} element={<CasePage study={study} />} />
          ))}
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
