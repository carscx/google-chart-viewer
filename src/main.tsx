import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import GoogleChart from '@/GoogleChart'
import i18n from '@/i18n'
import { I18nextProvider } from 'react-i18next'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <Suspense>
          <GoogleChart />
        </Suspense>
      </I18nextProvider>
    </React.StrictMode>
  )
} else {
  console.error('No se pudo encontrar el elemento root')
}
