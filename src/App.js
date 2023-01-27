import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import GifButtons from './GifButton';
import Share from './share';
function App() {
  return (
    <Router>
      <div className="container">
  <Share />
  {/* <GifButtons/> */}
</div>
    </Router>
  );
}

export default App;
