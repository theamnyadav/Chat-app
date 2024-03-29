import React, {useState} from "react";
import { useMoralis } from "react-moralis";

function SendMessage({endofMessageRef}) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) =>{
      e.preventDefault();

      if(!message) return;

      const Messages = Moralis.Object.extend("Messages");
      const messages = new Messages();

      messages.save({
          message:message,
          username:user.getUsername(),
          ethAddress : user.get('ethAddress')
      }).then((message)=>{
        // The object was saved successfully
      },(error)=>{
        // The save failed
        // error 
        console.log(error.message)
      }) ;
      endofMessageRef.current.scrollIntoView({behavior:"smooth"});
      setMessage("");
  };
  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-xl shadow-xl rounded-full border-blue-900 border-4">
      <input
        type="text"
        className="flex-grow pr-5 outline-none bg-transparent text-white placeholder-gray-500"
        placeholder="Enter a Message"
     value={message}
     onChange={(e)=>setMessage(e.target.value)}
     />
      <button type='submit' onClick={sendMessage} className="font-bold text-pink-500">Send</button>
    </form>
  );
}

export default SendMessage;
