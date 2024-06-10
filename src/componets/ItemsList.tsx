import Button from "./Button";
import {Items , ReactSetState} from "../types/utils";

type ItemList = {
    items : Items[];
    setItems : ReactSetState<Items[]>
}

const ItemList = ({items , setItems } : ItemList) => {

    const handleDelete = (id:string) => {
        setItems((prev) => prev.filter((data) => data.id !== id))
      }
    return  items.map((data) => (
        <div 
        key={data.id}
         className='flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1'>
          <p>{data.title}</p>
          
          <Button title='delete ' className='bg-orange-800 p-2 rounded-sm' onClick={() => {handleDelete(data.id)}} />
        </div>

          ))
    
}

export default ItemList; 