import React, { useState, useRef } from 'react';

function InputSample() {
  // const [text, setText] = useState('');
  const [inputs, setInputs] = useState({name: '', nick: ''});
  const { name, nick } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const nameInput = useRef<HTMLInputElement>(null);
  const onReset = () => {
    setInputs({
      name: '',
      nick: ''
    });
    nameInput.current?.focus();
  }
  return (
    <div>
      <input name="name" placeholder="NAME" onChange={onChange} value={name} ref={nameInput}/>
      <input name="nick" placeholder="NICKNAME" onChange={onChange} value={nick}/>
      <button onClick={onReset}>INIT</button>
      <div>
        <b>NAME : {name}</b>
        <br/>
        <b>NICKNAME : {nick}</b>
      </div>
    </div>
  );
}

export default InputSample;
