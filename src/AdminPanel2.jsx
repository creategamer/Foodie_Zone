// import { useEffect, useState } from "react";
// import axios from 'axios';

// const AdminPanel2 = () => {
//   const [allUser, setallUser] = useState([]);

//   useEffect(() => {
//     axios.get('/api/admin/users')
//       .then((res) => {
//         console.log("admin data");
//         console.log(res.data);
//         setallUser(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  
//   const handleDeleteUser = async (userId) => {
//     console.log(userId);
//     try {
//       console.log("delete");
//       console.log(userId);
//       await axios.delete(`/api/admin/users/${userId}`);

//       setallUser(allUser.filter(user => user._id !== userId));
//       console.log("user deleted");
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   return (
//     <div className="bg-white py-24 sm:py-32 dark:bg-gray-700">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-14 dark:text-white">Admin Panel</h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-white">Learn how to grow your business with our expert advice.</p>
//         </div>
//         <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {allUser.map((user) => (
//             <article key={user.id} className="flex flex-col items-start justify-between bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{user.fullname}</h3>
//                 <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Username: {user.Username}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">Address: {user.address}, {user.city}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">Email: {user.email}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">Phone: {user.phonenumber}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">Pincode: {user.pincode}</p>
//               </div>
//               <button 
//                 type="button" 
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 my-4 mx-6 rounded"
//                 onClick={() => handleDeleteUser(user._id)}
//               >
//                 Delete
//               </button>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel2;


import { useEffect, useState } from "react";
import axios from 'axios';

const AdminPanel2 = () => {
  const [allUser, setallUser] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/admin/users');
      setallUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    console.log(userId);
    try {
      console.log("delete");
      console.log(userId);
      await axios.delete(`/api/admin/users/${userId}`);
      // After successful deletion, fetch user data again
      fetchUserData();
      console.log("user deleted");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-14 dark:text-white">Admin Panel</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-white">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allUser.map((user) => (
            <article key={user.id} className="flex flex-col items-start justify-between bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{user.fullname}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Username: {user.Username}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Address: {user.address}, {user.city}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Email: {user.email}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Phone: {user.phonenumber}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Pincode: {user.pincode}</p>
              </div>
              <button 
                type="button" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 my-4 mx-6 rounded"
                onClick={() => handleDeleteUser(user._id)}
              >
                Delete
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel2;
