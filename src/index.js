import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <App assets={window.assetManifest} />
  </BrowserRouter>,
)
