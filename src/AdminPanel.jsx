// //first code
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from './firebase';
// import AdminNav from "./AdminNav";
// // import { useNavigate } from 'react-router-dom';

// const AdminPanel = () => {


//   // const [allUser,setallUser]=useState([])

//   // useEffect(() => {
//   //   axios.get('/api/users/randomuser')
//   //     .then((res) => {
//   //       setallUser(res.data);
//   //       console.log(res.data);
//   //       })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // }, []);

  

//   //image Order uploaded
//   // const [img, setImg] = useState(undefined);
//   const [image,setimage]=useState(undefined);
//   const [video, setVideo] = useState(undefined);
//   const [imgPerc, setImgPerc] = useState(0);
//   const [videoPerc, setVideoPerc] = useState(0);
//   const [inputs, setInputs] = useState({});
//   const [submitMessage, setSubmitMessage] = useState('');


//   const [product,getproduct]=useState([]);
  
//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };


//   const uploadImage = (image) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + image.name;
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, image);
  
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setImgPerc(Math.round(progress));
  
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//             break;
//         }
//       },
//       (error) => {},
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setInputs((prev) => {
//             return { ...prev, image: downloadURL };
//           });
//         });
//       }
//     );
//   };
  
//   useEffect(() => {
//     image && uploadImage(image);
//   }, [image]);
  

//   const handleUpload=async (e)=>{
//     e.preventDefault();
//     await axios.post("/api/order", {...inputs})
//     .then((res)=>{
//       console.log(res.data);
//       console.log("Upload successful");
//     // Reset input fields after successful upload
//     setInputs({});
//     // Display submission message
//     setSubmitMessage('upload successfully!');
      
//     }).catch((err)=>{
//       console.log("this is upload error");
//       setSubmitMessage('Error upload the data. Please try again.');
//       console.log(err);
//     })
//   }

  
//   useEffect(() => {
//     axios.get('/api/admin/orders')
//       .then((res) => {
//         console.log("admin product data");
//         console.log(res.data);
//         getproduct(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);



//   // const handleDeleteProduct = async (userId) => {
//   //   console.log(userId);
//   //   try {
//   //     console.log("delete");
//   //     console.log(userId);
//   //     await axios.delete(`/api/admin/users/${userId}`);

//   //     getproduct(product.filter(user => user._id !== userId));
//   //     console.log("user deleted");
//   //   } catch (error) {
//   //     console.error("Error deleting user:", error);
//   //   }
//   // };

//   return (
//     <>
//     {/* <AdminNav/> */}
//     <div className="bg-white py-24 sm:py-32 dark:bg-gray-700">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl my-14 dark:text-white">Admin Panel</h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-white">Learn how to grow your business with our expert advice.</p>

//            {/* FORM START */}        
//       {/* form using admin panel */}
//       <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for a new product</h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md  ">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//         {/* onSubmit={handleSubmit} */}
//           <form className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//               <div className="mt-1">
//                 <input
//                   name="name"
//                   type="text"
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   onChange={handleChange}
//                   // onChange={(e)=>setname(e.target.value)}
//                 />
//               </div>
//             </div>

//             {/* Other form fields (image, description, price, type) go here */}
//             <div>
//               <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
//               <div className="mt-1">
//               {imgPerc > 0 ? (
//               "Uploading:" + imgPerc + "%"
//                 ) : (
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setimage(e.target.files[0])}
//               />
//               )}
//               </div>
//             </div>

//             {/* Description */}
//             <div>
//               <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
//               <div className="mt-1">
//                 <textarea
//                   name="desc"
//                   rows="3"
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   onChange={handleChange}
//                   // onChange={(e)=>setdesc(e.target.value)}
//                 ></textarea>
//               </div>
//             </div>

//             {/* Price */}
//             <div>
//               <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
//               <div className="mt-1">
//                 <input
//                   name="price"
//                   type="text"
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"      
//                   onChange={handleChange}
//                   // onChange={(e)=>setprice(e.target.value)}
//                 />
//               </div>
//             </div>

//             {/* Type */}
//             <div>
//               <label htmlFor="type" className="block text-sm font-medium text-gray-700">type</label>
//               <div className="mt-1">
//                 <input
//                   name="type"
//                   type="text"
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  
//                   onChange={handleChange}
//                   // onChange={(e)=>settype(e.target.value)}
//                 />
//               </div>
//             </div>


//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 onClick={handleUpload}
//               >
//                 Upload Dish
//               </button>
//               {submitMessage && <p className="text-sm text-gray-500 mt-2">{submitMessage}</p>}
//             </div>
//           </form>
//         </div>
//       </div>
//         {/* form end */}

//         </div>

//         <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {product.map((pro) => (
//             <article key={pro.id} className="flex flex-col items-start justify-between bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
//               <div className="p-6">
//                 {pro.type === 'gujarati' && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{pro.name}</h3>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Description: {pro.desc}</p>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Price: {pro.price}</p>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Type: {pro.type}</p>
//                 </div>
//                 )}  
                
//                 {pro.type === 'punjabi' && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{pro.name}</h3>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Description: {pro.desc}</p>
//     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Price: {pro.price}</p>
//     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Type: {pro.type}</p>
//   </div>
// )}

// {pro.type === 'southindian' && (
//   <div>
//     <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{pro.name}</h3>
//     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Description: {pro.desc}</p>
//     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Price: {pro.price}</p>
//     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Type: {pro.type}</p>
//   </div>
// )}

// {pro.type === 'chinese' && (
//   <div>
//     <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{pro.name}</h3>
//     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Description: {pro.desc}</p>
//     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Price: {pro.price}</p>
//     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Type: {pro.type}</p>
//   </div>
// )}

//               </div>
//               <button 
//                 type="button" 
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 my-4 mx-6 rounded"
//                 onClick={() => handleDeleteProduct(product._id)}
//               >
//                 Delete
//               </button>
//             </article>
//           ))}
//         </div>
//         <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//         </div>
//       </div>
//     </div>
//     </div>
//     </>

//   );
// };

// export default AdminPanel;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//secocund code
import { useEffect, useState } from "react";
import axios from 'axios';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from './firebase';
import AdminNav from "./AdminNav";

const AdminPanel = () => {
  const [image, setImage] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [product, setProduct] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const uploadImage = (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgPerc(Math.round(progress));
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, image: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    image && uploadImage(image);
  }, [image]);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/order", { ...inputs });
      console.log(response.data);
      setSubmitMessage('Upload successful!');
      setInputs({});
    } catch (error) {
      console.log("Error uploading data:", error);
      setSubmitMessage('Error uploading data. Please try again.');
    }
  };

  useEffect(() => {
    axios.get('/api/admin/orders')
      .then((res) => {
        console.log("admin product data");
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteProduct = async (proId) => {
    try {
      await axios.delete(`/api/admin/orders/${proId}`);
      setProduct(product.filter(product => product._id !== proId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* AdminNav
      <AdminNav /> */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Admin Panel</h2>

        {/* New Product Form */}
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Add New Product</h3>
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="image" className="block font-medium text-gray-700">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {imgPerc > 0 && <p>Uploading: {imgPerc}%</p>}
            </div>
            <div>
              <label htmlFor="desc" className="block font-medium text-gray-700">Description</label>
              <textarea
                name="desc"
                id="desc"
                rows="3"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor="price" className="block font-medium text-gray-700">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="type" className="block font-medium text-gray-700">Type</label>
              <input
                type="text"
                name="type"
                id="type"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload
            </button>
            {submitMessage && <p className="text-sm text-gray-500 mt-2">{submitMessage}</p>}
          </form>
        </div>

        {/* Product Cards */}
        <h1 className="text-4xl font-bold text-center py-10 underline ">Total Dishes</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {product.map((pro) => (
            <div key={pro.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-semibold text-gray-900">{pro.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{pro.description}</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                <p className="text-sm font-medium text-gray-900">Price:{pro.price} Rs.</p>
                <p className="mt-1 text-sm text-gray-600">Type:{pro.type}</p>
                <p className="mt-1 text-sm text-gray-600">{pro.desc}</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-4 sm:px-6 flex justify-end">
                <button 
                  type="button" 
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => handleDeleteProduct(pro._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//third code
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import app from "./firebase";
// import AdminNav from "./AdminNav";

// const AdminPanel = () => {
//   const [image, setImage] = useState(undefined);
//   const [imgPerc, setImgPerc] = useState(0);
//   const [inputs, setInputs] = useState({});
//   const [submitMessage, setSubmitMessage] = useState("");
//   const [product, setProduct] = useState([]);

//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   const uploadImage = (image) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + image.name;
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, image);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setImgPerc(Math.round(progress));
//       },
//       (error) => {},
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setInputs((prev) => {
//             return { ...prev, image: downloadURL };
//           });
//         });
//       }
//     );
//   };

//   useEffect(() => {
//     image && uploadImage(image);
//   }, [image]);

//   const handleUpload = async (e) => {
//     console.log(inputs);
//     e.preventDefault();
//     await axios
//       .post("/api/order", { ...inputs })
//       .then((res) => {
//         console.log(res.data);
//         console.log("Upload successful");
//         // setInputs({});
//         // setSubmitMessage("Upload successful!");
//       })
//       .catch((err) => {
//         console.log("this is upload error");
//         setSubmitMessage("Error uploading the data. Please try again.");
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     axios
//       .get("/api/admin/orders")
//       .then((res) => {
//         console.log("admin product data");
//         console.log(res.data);
//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);


//   const handleDeleteProduct = async (proId) => {
//     console.log("pro id ");
//     console.log(proId);
//     try {
//       console.log("delete");
//       console.log(proId);
//       await axios.delete(`/api/admin/orders/${proId}`);

//       setProduct(product.filter(user => user._id !== proId));
//       console.log("user deleted");
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* AdminNav */}
//       {/* Add your AdminNav component here if necessary */}

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">
//           Admin Panel
//         </h2>

//         {/* New Product Form */}
//         <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//             Add New Product
//           </h3>
//           <form onSubmit={handleUpload} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="image" className="block font-medium text-gray-700">
//                 Image
//               </label>
//               <input
//                 type="file"
//                 name="image"
//                 id="image"
//                 accept="image/*"
//                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                 onChange={(e) => setImage(e.target.files[0])}
//               />
//               {imgPerc > 0 && <p>Uploading: {imgPerc}%</p>}
//             </div>
//             <div>
//               <label htmlFor="description" className="block font-medium text-gray-700">
//                 Description
//               </label>
//               <textarea
//                 name="description"
//                 id="description"
//                 rows="3"
//                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div>
//               <label htmlFor="price" className="block font-medium text-gray-700">
//                 Price
//               </label>
//               <input
//                 type="text"
//                 name="price"
//                 id="price"
//                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="type" className="block font-medium text-gray-700">
//                 Type
//               </label>
//               <input
//                 type="text"
//                 name="type"
//                 id="type"
//                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                 onChange={handleChange}
//               />
//             </div>
//             <button
//               type="submit"
//               className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Upload
//             </button>
//             {submitMessage && <p className="text-sm text-gray-500 mt-2">{submitMessage}</p>}
//           </form>
//         </div>

//         {/* Product Cards */}
//         <h1 className="text-4xl font-bold text-center py-10 underline ">Total Dishes</h1>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
//           {product.map((pro) => (
//             <div key={pro.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
//               <div className="px-4 py-5 sm:px-6">
//                 <h3 className="text-lg font-semibold text-gray-900">{pro.name}</h3>
//                 <p className="mt-1 text-sm text-gray-600">{pro.description}</p>
//               </div>
//               <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
//                 <p className="text-sm font-medium text-gray-900">Price:{pro.price} Rs.</p>
//                 <p className="mt-1 text-sm text-gray-600">Type:{pro.type}</p>
//                 <p className="mt-1 text-sm text-gray-600">{pro.desc}</p>
//               </div>
//               <div className="border-t border-gray-200 px-4 py-4 sm:px-6 flex justify-end">
//                 <button 
//                   type="button" 
//                   className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                   onClick={() => handleDeleteProduct(pro._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
