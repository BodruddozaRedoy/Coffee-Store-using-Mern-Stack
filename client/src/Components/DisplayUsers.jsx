import React, { useEffect, useState } from 'react';

const DisplayUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
    fetch('https://coffee-store-server-jet-pi.vercel.app/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`https://coffee-store-server-jet-pi.vercel.app/users/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = users.filter(prev => prev._id !== id)
            setUsers(remaining)
        })
    }

    return (
        <div className='font-serif'>
            <h1 className='text-center text-4xl my-5'>Users</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Created</th>
        {/* <th>Favorite Color</th> */}
        <th>Remove User</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => (
            <tr key={user._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user?.name}</div>
              <div className="text-sm opacity-50">{user?.email}</div>
            </div>
          </div>
        </td>
        <td>
        {user?.createdAt}
        </td>
        {/* <td>Purple</td> */}
        <th>
          <button onClick={() => handleDelete(user?._id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
        ))
      }
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
  </table>
</div>
        </div>
    );
};

export default DisplayUsers;