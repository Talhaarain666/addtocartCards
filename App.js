import logo from './logo.svg';
import './App.css';
import { setState, useState } from "react";
import Abc from "./card"

function App() {

  const [arr, setArr] = useState([

    {
      title: "Head Phones",
      price: "15$",
      description: "Example Text",
      size: "Medium",
      quantity: "10",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Shoes",
      price: "20$",
      description: "Example Text",
      size: "Large",
      quantity: "10",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Watch",
      price: "30$",
      description: "Example Text",
      size: "Medium",
      quantity: "10",
      img: "https://images.unsplash.com/photo-1596460107916-430662021049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Camera",
      price: "50$",
      description: "Example Text",
      size: "Small",
      quantity: "10",
      img: "https://images.unsplash.com/photo-1515197304934-f95872d7156f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Laptop",
      price: "300$",
      description: "Example Text",
      size: "Large",
      quantity: "10",
      img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Watch",
      price: "30$",
      description: "Example Text",
      size: "Small",
      quantity: "10",
      img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },

  ])

  let addFunc = () => {
    // console.log(arr.map((g)=>{g.title}))

  }


  return (

    <div className='App'>

      <header className='App-header'>
      

        {arr.map((e) => <>

          <Abc titles={e.title} prices={e.price} action={addFunc} imG={e.img} desc={e.description} sizes={e.size} quant={e.quantity} />

        </>)}



      </header>
    </div>
  );
}

export default App;