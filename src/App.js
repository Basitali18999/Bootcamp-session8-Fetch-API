import React, { useEffect, useState } from 'react'


function App() {



  const [Fetch, setFetch] = useState([{}]);
  const [isFetching, setFetching] = useState();




  useEffect(() => {

    async function getData() {

      setFetching(true);
      const fetchdata = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data1 = await fetchdata.json()
      // console.log(data1);
      const setState = () => {
        setFetching(false);
      }
      setFetch(data1);
      setTimeout(setState, 4000);



    }
    // setTimeout(getData, 3000);
    getData()



  }, [])

  if (isFetching) {
    return (<div><h1>Loading data please wait a moment........</h1></div>)
  }


  return (
    <div>

      
       <ul>
        
        <h2>All title of fetched data</h2>
        
        {Fetch.map((names) => {

          return (<li>{names.title}</li>)

        })};

        </ul>


    </div>

  )


}


export default App;
