import { createSlice, current } from "@reduxjs/toolkit"


const CartSlice = createSlice({
    name:"cart",
    initialState:{  
        items: [],
     },
    reducers:{
      addItems:(state,action)=>{
    
        state.items.push(action.payload)
      },
      clearItems:(state,action)=>{
    
        state.items.length = 0;
      }


    }
})

export const {addItems,clearItems} = CartSlice.actions
export default CartSlice.reducer