// import Counter from './components/Counter';


import React from 'react'; // node_modules/react/index.js;
import { type Product } from '@/app/components/Counter';


import Counter, { CounterVar as counter3, CounterVar2 } from '@/app/components/Counter';

console.log(counter3);

export default function Home() {
    return <Counter />;
}
