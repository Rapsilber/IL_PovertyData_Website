import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <section>
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <Body />
      </div>
      <div className="container">
        <Footer />
      </div>
    </section>
  );
}

export default App;
