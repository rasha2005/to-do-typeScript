
import { useState } from 'react'
import Input from './componets/input';
import Button from './componets/Button';
import {Items} from './types/utils';
import './App.css'
import ItemList from './componets/ItemsList';



function App() {
  const [items , setItems] = useState<Items[]>([])
  const [inputValue , setInputValue] = useState<string>("");

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault();
    setItems(prev=> [...prev ,{title:inputValue , id:Date.now().toString()}]);
    setInputValue("");
  }

 

  return (
   <>
   <div className='w-[350px'>
     <form onSubmit={handleSubmit}>
      <Button title='sumbit' className='bg-black rounded-am  w-full p-2 '/>
     </form>
     <Input type='text' inputValue={inputValue} setInputValue={setInputValue}/>
      <div className='h-52 overflow-y-auto mt-2'>
        <ItemList items={items}  setItems={setItems} />
      </div>
   </div>
    </>
  )
}

export default App
