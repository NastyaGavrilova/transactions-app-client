import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './_app.scss';
function App() {
  return (
    <div className="App">
      <div className="app__wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
