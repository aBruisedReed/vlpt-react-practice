import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import User from './User';

function App() {
  const user = {
    id: 1,
    username: 'kim'
  };
  const obj11 = { a: 1 };
  const text = `${obj11}`;
  console.log(text);
  return (
    <div className="App">
    </div>
  );
}

export default App;
