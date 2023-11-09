import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount,setAmount] = useState(0);
  const [from, setFrom] = useState("cad");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  let apidata = useCurrencyInfo(from);
  // console.log("api data ", apidata)

  const options = Object.keys(apidata);
  // console.log("Options : ", options)

  const swap = ()=>{
    setFrom(to)
    setTo(from)

    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = ()=>{
    setConvertedAmount(amount * apidata[to])
    console.log(`${amount} * ${apidata[to]}`);
  }



  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/16986836/pexels-photo-16986836/free-photo-of-illuminated-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange = {(newAmount)=> setAmount(newAmount)}
                                onCurrencyChange = {(newCurrency)=>setFrom(newCurrency)}
                                currencyOptions = {options}
                                currency = {from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onAmountChange  = {(newAmount)=> setConvertedAmount(newAmount)}
                                onCurrencyChange = {(newCurrency)=>setTo(newCurrency)}
                                currencyOptions = {options}
                                currency = {to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
