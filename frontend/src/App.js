import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Login from './components/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Dashboard from './components/Dashboard';
import Books from './components/Books';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Books} />
        <footer style={{ height: '50vh', marginTop: '60%' }}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.977644918158!2d77.56436641534572!3d12.909158290896933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1625149013108!5m2!1sen!2sin'
            width='90%'
            height='300px'
            style={{ border: 0, margin: 'auto' }}
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
