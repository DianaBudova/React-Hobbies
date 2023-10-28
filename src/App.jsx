import './styles/App.css';
import hobbies from './assets/HobbyList';
import HobbyList from './HobbyList';

function App() {
  return (
    <div className='app-container'>
      <HobbyList hobbyList={hobbies}/>
    </div>
  )
}

export default App;
