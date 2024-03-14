import React, {useRef} from "react";

const UnctonrolledComponent = () => {
  const inputRef = useRef(null);
  const handleInput = (event)=>{
    alert(inputRef.current.value);  
    console(inputRef.current.value);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleInput}>
      <label>
        Name:
      <input type="text" name="name" ref={inputRef}/>
      <button type="submit">Submit</button>
      </label>
    </form>
  )
}

export default UnctonrolledComponent