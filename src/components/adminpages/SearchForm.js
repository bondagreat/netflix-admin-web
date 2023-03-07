import { useState } from 'react';

export default function SearchForm({ updateShowUser }) {
  const [searchUser, setSearchUser] = useState(null);

  const handleChangeSearchUser = (e) => {
    if (e.target.value.trim() === '') {
      setSearchUser(null);
      updateShowUser(searchUser);
    }
    // console.log(e.target.value);
    setSearchUser(e.target.value.trim());
    updateShowUser(e.target.value.trim());
  };
  return (
    <input
      className="border-2 border-white bg-black text-white"
      onChange={(e) => handleChangeSearchUser(e)}
    />
  );
}
