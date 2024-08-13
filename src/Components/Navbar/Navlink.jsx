import React from 'react'

const Navlink = () => {
    const link =[
        {name:"Chinese" } ,{name:"Gujarati"},{name:"Punjabi"},{name:"South Indian"}
    ];
  return (
    <>
      {
        link.map(link=>(
            <div>
                <div>
                    <h1>
                        {link.name};
                    </h1>
                </div>
            </div>
        ))
      }
    </>
  )
}

export default Navlink
