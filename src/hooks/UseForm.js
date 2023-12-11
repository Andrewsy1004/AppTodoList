import { useState } from "react";
export const useForm = (intialForm={}) => {
    const [formState, setFormState] = useState(intialForm);
        
      const onNameChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [name]: value 
        });
      };
      
      const onReset = () =>{
        setFormState(intialForm);
      }

    return{
        formState,
        onNameChange,
        onReset,
    } 
}


