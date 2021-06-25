import logo from './logo.svg';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUsers';
import { useReducer, useCallback, useMemo, useRef, useState } from 'react';

function countActive(users) {
  console.log('counting active users...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: false
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ])
  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    // setUsers([
    //   users,
    //   id: nextId.current,
    //   ...inputs
    // ]);
    setUsers(users => users.concat({id: nextId.current, ...inputs}));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [inputs]);

  const onRemove = useCallback((id) => {
    setUsers(users => users.filter(user=>id !== user.id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(user => {
      if(user.id === id) {
        return Object.assign({}, user, { active: !user.active});
      } else {
        return user
      }
    }));
    // setUsers(
    //   users.map(user =>
    //     user.id === id ? { ...user, active: !user.active } : user
    //   )
    // );
  },[]);
  // const count = countActive(users);
  const count = useMemo(() => countActive(users), [users]);
  return (
    <div>
      <CreateUser
        username={inputs.username}
        email={inputs.email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList onToggle={onToggle} onRemove={onRemove} users={users}></UserList>
        <div>Acitve : {count}</div>
        <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);
  // const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // setNumber(prevNumber => prevNumber + 1);
    dispatch({ type: 'INCREMENT'});
  };

  const onDecrease = () => {
    // setNumber(prevNumber => prevNumber - 1);
    dispatch({ type: 'DECREMENT'});
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': 
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}

export default App;
