import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, CategoryModal, ArbitrationModal, WhatsAppWidget } from './components';
import { ModalProvider } from './context/ModalContext';
import {
  HomePage,
  ServicesPage,
  AboutPage,
  ContactPage,
  FormPage,
  PackagesPage,
} from './pages';

function App() {
  return (
    <ModalProvider>
      <Router>
        <CategoryModal />
        <ArbitrationModal />
        <WhatsAppWidget />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/form/:category" element={<FormPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-5xl font-bold text-primary-dark mb-4">404</h1>
                      <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
                      <a
                        href="/"
                        className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-colors"
                      >
                        Go Back Home
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
