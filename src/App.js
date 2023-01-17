import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Team from './Components/Meet the team/Team';
import Navwidcaro from './Components/Navbarwithcarosal/Navwidcaro';
import Services from './Components/Services/Services';
import Watchapllication from './Components/Watchapplication/Watchaplication';
import './App.css';

function App() {
  return (

     
    <div className="App">
      <Navwidcaro />
      <Watchapllication />
      <Team />
      <Services />
      <Footer />
    </div>
  )

}

export default App;
