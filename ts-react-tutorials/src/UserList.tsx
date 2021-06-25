function UserList({ users }: userProps) {
  return (
    <div>
      {users.map((user: userType) => (<User key={user.id} user={user}/>))}
    </div>
  )
}

type userType = {
  id: number;
  name: string;
  email: string
  ;
}
type userProps = {
  user: userType
}
function User({ user }: userProps) {
  return (
    <div>
      <b>{user.name}</b>
      <span>{user.email}</span>
    </div>
  );
}

export default UserList;
