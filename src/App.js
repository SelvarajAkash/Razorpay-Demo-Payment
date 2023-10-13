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
        key: "rzp_test_q8EOkgs7UxiYXx",
        key_secret: "sQuUyJdONJbNbejandxKfmLl",
        amount: amount * 100,
        currency: "INR",
        name: "DEMO PAYMENT !",
        description: "Testing Payment !",
        handler: (res) => {
          alert(res.razorpay_payment_id);
        },
        prefill : {
          name : "Selvaraj",
          email : "scodeflutterdeveloper@gmail.com",
          contact : "7200524286"
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
