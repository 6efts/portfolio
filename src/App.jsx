import Nav from './components/Nav';
import Content from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Provider as ViewProvider } from './context/view';

const App = () => {
  return (
    <ViewProvider>
      <div className="bg-for-background flex flex-col overflow-hidden">
        <Nav />
        <Content />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </ViewProvider>
  );
};

export default App;
