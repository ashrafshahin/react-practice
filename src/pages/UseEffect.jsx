import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [count, setCount] = useState(0)

// 3. logic function k update function er vitore diye return(unmount) kora hoyeche.. tai preferred number k exceed kortese naa... √√√
    useEffect(() => {

        const interval = setInterval(() => {
            setCount((count) => { 
                if (count >= 10) {
                    clearInterval(interval)
                    return count
                }
                console.log(count, 'dekhi count e ki astese');
    
                return count + 1
                /// aikhane log korle to 1 er por already unmounting kore deche... xxx
            }, 1000)
          
        })
        return () => clearInterval(interval)
     
    }, [])
    
    // 2. 11 te geye stop kore error...
    // useEffect(() => {
        
    //     const interval = setInterval(() => {
    //         if (count <= 10) {
    //             setCount((prevCount) => prevCount + 1);
                
    //             console.log(count, 'count e ki ase');
    //             // return count
    //         }
            
    //     }, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [count]);

    
    // 1. kaj hoina 3rd attempt
    // useEffect(() => {
    //     if (count <= 5) {
    //         console.log(count, 'dekhi count e ki ase');
            
            
    //     }
    //     const interval = setInterval(() => {
    //         setCount((prevCount) => prevCount + 1)
            
    //     },1000)
        
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [count]);
    

    
    //4. log e stop hoi but display te cholte thake...
    // useEffect(() => {
    //     if (count <= 10) {
    //         clearInterval()
    //         console.log(count, 'count e ki ase');
            
    //     }
    //     const interval = setInterval(() => {
    //         setCount(prevCount => prevCount + 1)
    //         console.log(prevCount, 'dekhi prevcount e ki ase');
            
            
    //     }, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [count])
    
  return (
      <div className='m-10'>
          <div className='p-10 text-2xl bg-gray-500'> UseEffect Practice = {count}</div>
          <div className='[&>h2]:text-2xl [&>h2]:mr-15'>
              <div className=''>
                  <h2 className='m-5 text-2xl'>stopping on 11</h2>
                  <p className='text-xl '>This "off-by-one" error occurs because of how logic is sequenced inside your update function. If you check the condition inside setCount, the code will often increment the number first and then check if it's 10—but by that time, the next render has already been triggered with the value 11.</p>
              </div>
              <div>
                  <h2 className='m-5 text-2xl'>solution</h2>
                  <p className='text-xl '>The Fix: Check before you increment
                      To stop exactly at 10, ensure your logic prevents the count from ever exceeding that limit.</p>

                  <h2 className='m-5 text-2xl'>Logic </h2>  
              <p className='text-xl '>logic function k update function er vitore diye return k unmount/stop kora hoyeche.. tai preferred number k exceed kortese naa...</p>
                  </div>

          </div>
          
          
      </div>
  )
}

export default UseEffect