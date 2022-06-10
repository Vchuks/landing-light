import logo1 from './images/avatar.jpg';
import logo2 from './images/wave.png';
import logo3 from './images/mastercard.png';
import logo4 from './images/chip.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import visa from './images/visa.png';
import discover from './images/discover.png';
import paypal from './images/paypal.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import  ReactDOM  from 'react-dom/client';



function App() {
  const [num, setNum] = useState("");
  const [expire, setExpire] = useState("");

  const handlenum = (e) => {
    setNum(e.target.value);
  }
  const handleexpire = (e) => {
  setExpire(e.target.value);
}
  const handlesubmit = (e) =>{
    e.preventDefault();
    document.getElementById('cardnum').innerHTML=num;
    document.getElementById("expirenum").innerHTML=expire;
  }

  return (

    <div className="App">
      <header>
        <nav>
          <a href='#'>TRIPS</a>
          <a href='#'>RECENTLY VIEWED</a>
          <a href='#'>BOOKINGS</a>
          <img src={logo1} alt="Avatar" className="avatar"/>
        </nav>
      </header>

      <main>
      <hr></hr>
      <div className='pay'>
        <div className='row'>
            <div className='col-md-8'>
            <h2>Payment Information</h2>
            <p>Choose your method of payment</p>
            </div>
            <div className='col' id="card">
            <img src={visa} alt= "visa card" />
            <img src={discover} alt="discover card"/>
            <img src={paypal} alt="paypal card"/>
            </div>
          </div>
        </div>

        <div className='card-container mt-5'>
          <div className='row'>
            <div className=' col-12 col-xl-5 '>
              <div className='card p-3'>
                <p>CARD NUMBER</p>
                <p id="cardnum">3656676</p>
                <p><img src={logo2} alt='wave' width={40}/>
                <img src={logo4} alt='chip' width={100}/></p>
                <div className='row'>
                  <div className='col-8'>
                <p>EXPIRATION DATE</p>
                <p id="expirenum">355</p>
                <p>JOHN DOE</p>
                </div>
                <div className='col'>
                  <img src={logo3} alt="master-card" width="100" className='position-absolute bottom-0 right-0 pb-3'/>
                  </div>
                </div>
                
              </div>
            </div>
            <div className='col-12 col-xl-7'>
            <Form onSubmit={(e) => {handlesubmit(e)}}>
              <div className='row pt-5 pt-lg-0'>
                <div className='col'>
                
              <Form.Group className="mb-3" controlId="credit-card">
                <Form.Label>Credit Card Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your card number" value={num} required onChange={(e) => {handlenum(e)}} className='p-3' pattern="[0-9]{12}" title="12 digits" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="scode">
                <Form.Label>Security Code</Form.Label>
                <Form.Control type="input" placeholder="Enter your cvv" className='p-3' pattern="[0-9]{3}" required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="checkbox">
                <Form.Check type="checkbox" label="Use this card for next time purchase" className='p-3'/>
              </Form.Group>

                </div>
                <div className='col'>
              <Form.Group className="mb-3" controlId="expire">
                <Form.Label>Expiration date</Form.Label>
                <Form.Control type="input" placeholder="Enter month/year" value={expire} required onChange={(e)=> {handleexpire(e)}} className='p-3' pattern="[0-9]{4}" title="M/Y,04/22" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="pcode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="input" placeholder="10110" className='p-3' pattern="[0-9]{5}" required/>
              </Form.Group>
                </div>
                </div>
                <div className='d-grid gap-2'>
                <Button variant="primary" type="submit" className='p-2 fs-4'>
                  Add card
                </Button>
            
              </div>
              </Form>
            
            </div>
          </div>
        </div>

        <hr></hr>
        <div className='output p-3'>
          <h4 className='d-flex justify-content-between'><p>Subtotal</p><p>	&#8358;20497.00</p></h4>
          <h4 className='d-flex justify-content-between'><p>Estimated TAX</p><p>	&#8358;119.64</p></h4>
          <h4 className='d-flex justify-content-between'><p>Promotional code: <b className='text-secondary'>Z4KXLM9A</b></p><p>	&#8358;-60.00</p></h4>
        </div>
        <hr></hr>
        <div className='total p-3 pb-5 d-flex justify-content-between'>
          <Button variant="primary" className='col-md-3 py-md-3 px-2 fs-md-4'>Complete payment</Button>
          <h4>TOTAL:&#8358;2556.64</h4>
        </div>
      </main>

    </div>
  );
}

export default App;
