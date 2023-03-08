import { Link } from 'react-router-dom';

export default function UserList({ user, userTransaction }) {
  return (
    <>
      <tbody>
        <tr className=" bg-neutral-400 ">
          <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
            {user.id}
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-white ">User01</td>
          <td className="whitespace-nowrap px-6 py-4 text-white ">
            {user.email}
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-white ">
            {user.isActive === true ? 'Active' : 'Inactive'}
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-white ">
            <button className="text-white border-1  bg-red-600 px-7 py-1 rounded-lg mr-2 ">
              Block
            </button>
            <Link to={'/admin/transaction'} state={{ userTransaction }}>
              <button className="text-white border-1  bg-green-500 px-3 py-1 rounded-lg ml-5">
                Transaction
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
}
