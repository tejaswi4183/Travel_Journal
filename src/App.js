import React  from 'react';
import './style.css';
import Header from './components/header';
import Card from './components/card';
import data from './data';

export default function APP(){
  const card = data.map(items=>{
    return (
      <Card 
        key= {items.id}
        {...items}
      />
    )
  })
  return (
    <div className='container'>
        <Header />
        <section>
        { card }
        </section>
    </div>
  );
}


