import './App.css';
function App() {
 
  return (
    <div className="App">
      <PriceCard/>
      <PriceCard1/>
      <PriceCard2/>
      </div>
  );
}



export default App;
 
function PriceCard(){
  return(
    <div className='card-content'>
      <div className="container">
            <h5>FREE</h5>
            <h6> $0<span>/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <p>✓  Single User</p>
              <p>✓  5GB Storage</p>
              <p>✓  Unlimited Public Projects</p>
              <p>✓  Communtity Access</p>
              <p>✓  Unlimitied Private projects</p>
              <p className="text-muted">✕  Dedicatede Phone Support</p>
              <p className="text-muted">✕  Free subdomain</p>
              <p className="text-muted">✕  Monthly Status Reports</p>
            </ul>
            <div className="d-grid">
              <a href="#" class="btn btn-primary ">Button</a>
            </div>
          </div>
        </div>
  )
}
function PriceCard1(){
  return(
    <div className='card-content'>
      <div className="container">
            <h5>Plus</h5>
            <h6> $9<span >/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <p>✓  5 User</p>
              <p>✓  50GB Storage</p>
              <p>✓  Unlimited Public Projects</p>
              <p>✓  Communtity Access</p>
              <p>✓  Unlimitied Private projects</p>
              <p>✓  Dedicatede Phone Support</p>
              <p>✓  Free subdomain</p>
              <p className="text-muted">✕  Monthly Status Reports</p>
            </ul>
            <div className="d-grid">
              <a href="#" class="btn btn-primary ">Button</a>
            </div>
          </div>
        </div>
  )
}
 function PriceCard2(){
  return(
    <div className='card-content'>
      <div className="container">
            <h5>Pro</h5>
            <h6> $49<span class="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <p>✓ <b>Unlimited User</b></p>
              <p>✓  150GB Storage</p>
              <p>✓  Unlimited Public Projects</p>
              <p>✓  Communtity Access</p>
              <p>✓  Unlimitied Private projects</p>
              <p>✓  Dedicatede Phone Support</p>
              <p>✓  Free subdomain</p>
              <p>✓  <b>Monthly Status Reports</b></p>
            </ul>
            <div className="d-grid">
              <a href="#" class="btn btn-primary ">Button</a>
            </div>
          </div>
        </div>
  )
}