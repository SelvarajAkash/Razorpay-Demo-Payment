import './App.css';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState("");

  console.log(amount);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount === "") {
      alert("Enter Amount First");
    } else {
      const options = {
        key: "Razorpay_Api_Id",
        key_secret: "Razorpay_Secret_Api_key",
        amount: amount * 100,
        currency: "INR",
        name: "DEMO PAYMENT !",
        description: "Testing Payment !",
        handler: (res) => {
          alert(res.razorpay_payment_id);
        },
        prefill : {
          name : "Name",
          email : "example@gmail.com",
          contact : "1234567890"
        },
        notes : {
          address : "Razorpay Corporate office"
        },
        theme : {
          color : '#3399cc'
        },  
      };
      const pay = window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className="App">
      <h1>Razorpay Payment !</h1>
      <input type="text" placeholder='Enter Amount' onChange={(event) => setAmount(event.target.value)} /> <br /> <br />
      <button onClick={handleSubmit}>Pay</button>
    </div>
  );
}

export default App;
