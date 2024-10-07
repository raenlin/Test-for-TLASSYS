import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <main>
        <Nav />
        <Profile />
      </main>
    </>
  );
}

export default App;
