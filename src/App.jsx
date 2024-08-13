
import { useSelector } from "react-redux"

const App = () => {
  // const items=useSelector((state)=>state?.cart?.itemList)
  
  // console.log("==============================");
  // console.log(items);
  // console.log("==============================");

  const currentUser=useSelector(state=>state.user.currentUser)

  console.log(currentUser);

  const items=useSelector((state)=>(state?.cart?.itemList))
  console.log("==============================");
  console.log(items);
  console.log("==============================");


  return (
    <>
    
      

    </>
  )
}

export default App
