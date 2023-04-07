import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import Main from './components/main/main.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
