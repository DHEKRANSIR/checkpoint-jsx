import './App.css';
import './Style.css';
import imageInSrc from './Image/imageInSrc.jpg';
import myVideo from './Video/myVideo.mp4';
function App() {
  return (
<div className="App">
    <div style= {{border:'solid 1px black', borderRadius:'10px',overflow:'hidden'}}>

    <h1 className="title red">Dhekra Nsir</h1>
    <div className="bg">
      <img src={imageInSrc} alt='web'/>
      <img src="/imageInPublic.jpg" alt='profile'/>
    </div>
    </div>
    <div className='vid'>
    <video width="400" height="240" controls>
    <source src= {myVideo} type="video/mp4" />
    </video>
    </div>



 </div>
  );
}

export default App;
