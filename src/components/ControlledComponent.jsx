import axios from "axios";
import React, {useState, useEffect} from "react";

const ControlledComponent = () => {
  const [text, setText] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleForm = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    const axiosData =async () => {
      try{
        const id = Math.floor(Math.random() * 30) + 1;
        const data = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(data.data);
      }
      catch(err) {
        setError(err.message);
      }
    }
    axiosData();
  },[]);

  return(
    <>
    <form action="">
        <p>Your typed text: {text}</p>
        <input type="text" placeholder={text} onChange={handleForm} />
    </form>

    {/*useEffect*/}
    <div className="userData">
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address.street} {user.address.suite} {user.address.city}</p>
        </div>
      ) : ( error ? <p>Сталася помилка: {error}</p> : <p>"Завантаження даних...".</p>
      )}

    </div>
    </>
  )
}

export default ControlledComponent