import Header from './components/Header';
import Hero from './components/Hero';
import Description from './components/Description';
import Guide1 from './components/Guide1';
import Guide2 from './components/Guide2';
import Guide3 from './components/Guide3';
import Guide4 from './components/Guide4';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Description />
      <Guide1 />
      <Guide2 />
      <Guide3 />
      <Guide4 />
      <Footer />
    </div>
  );
}
