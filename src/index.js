import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

hydrateRoot(document, <App assets={window.assetManifest} />)
