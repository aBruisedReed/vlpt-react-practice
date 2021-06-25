import React, { useEffect } from 'react';

const User = function User({ user, onRemove, onToggle }) {
  return (
    <div style={{
        cursor: 'pointer',
        color: user.active ? 'green' : 'black'
      }}>
      <b onClick={() => onToggle(user.id)}>{user.username}</b>
      | 
      <span>{user.email}</span>
      <button onClick={()=>onRemove(user.id)}>DEL</button>
    </div>
  );
};

function UserList ({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user=>(
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}></User>
      ))}
    </div>
  );
}

export default UserList;
