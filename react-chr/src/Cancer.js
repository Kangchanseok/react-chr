import React from 'react'

function Cancer() {
    function test3(){
        let arr = []
        for (let i = 201; i < 281; i++){
            arr.push(<img src={'cancer' + '/' + i + '.png'}></img>)
        }
        return arr
    }
    // function test2_1(){
    //   let arr2 = []
    //   for (let i = 1; i < 25; i++){
    //     for (let j = 1; j < 11; j++) {
    //       arr2.push(<p>{i + '- ' + j}</p>)
    //     }
          
    //   }
    //   return arr2
    // }
  
//     const arr3 = [
//         {"id":1,"name":'abc'},
//         {"id":2,"name":'bcd'}
// ]

    return (
      <div className="Cancer">
        <table style={{border:"5px"}}>
          <thead>
            <tr style={{background:"orange", color:"black"}}>
              {/* <th style={{width:"30%"}}>No</th> */}
              <th style={{width:"70%"}}>Graph</th>
            </tr>
          </thead>
          <tbody>
            
            
            {/* {arr3.map((item) =>(
                <tr key={item.id}>
                    <td>{item.name}</td>
               </tr>
            ))} */}
            
            <td>{test3()}</td>


            
          </tbody>
          
           
          
        </table>
      </div>
    );
  }
  
  export default Cancer;