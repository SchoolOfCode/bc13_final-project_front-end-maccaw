import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext';
import Layout from '../components/Layout/Layout.js';

export default function App({ Component, pageProps }) {
  return(<AuthProvider><Layout><Component {...pageProps} /></Layout></AuthProvider>)
}
