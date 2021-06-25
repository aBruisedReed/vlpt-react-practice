import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input 
        name="username"
        placeholder="USERNAME"
        onChange={onChange}
        value={username}
      />
      <input 
        name="email"
        placeholder="EMAIL"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>ADD</button>
    </div>
  );
}

export default React.memo(CreateUser);
