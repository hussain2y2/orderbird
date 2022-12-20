import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

const User = () => {
  const [users, setUsers] = useState([]);
  const [field, setField] = useState('first_name');

  useEffect(() => {
   axios.get('/users')
     .then(response => setUsers(response.data));
  }, [])

  useEffect(() => {
    sortUsers();
  }, [field]);

  const sortUsers = () => {
    setUsers(users.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    }))
  }

  return (
    <div className="overflow-x-auto relative shadow-md rounded-lg md:w-2/3">
      <table className="w-full text-left text-gray-800 border-collapse">
        <thead className="text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="p-2 cursor-pointer" onClick={() => setField('first_name')}>
            First Name
          </th>
          <th className="p-2 cursor-pointer" onClick={() => setField('last_name')}>
            Last Name
          </th>
          <th className="p-2 cursor-pointer" onClick={() => setField('email')}>
            Email
          </th>
        </tr>
        </thead>
        <tbody>
        {users && users.map(user => (
          <tr key={user.id}>
            <td className="p-2">
              {user.first_name}
            </td>
            <td className="p-2">
              {user.last_name}
            </td>
            <td className="p-2">
              {user.email}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);



