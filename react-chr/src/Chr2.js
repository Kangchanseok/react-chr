

function Chr2() {
    function test2(){
        let arr = []
        for (let i = 1; i < 25; i++){
          for (let j = 1; j < 11; j++) {
            arr.push(<img src={'chr' + i + '/' + i + '-' + j + '.png'}></img>)
          }
            
        }
        return arr
    }
    function test2_1(){
      let arr2 = []
      for (let i = 1; i < 25; i++){
        for (let j = 1; j < 11; j++) {
          arr2.push(<p>{i + '- ' + j}</p>)
        }
          
      }
      return arr2
    }
  
    return (
      <div className="Chr2">
        <table style={{border:"5px"}}>
          <thead>
            <tr style={{background:"orange", color:"black"}}>
              <th style={{width:"30%"}}>No</th>
              <th style={{width:"70%"}}>Graph</th>
            </tr>
          </thead>
          <tbody>
            {/* {test2_1().map((item) =>  */}
            
            <tr>
            <td>{test2_1()}</td>
            <td>{test2()}</td>
            </tr>
            {/* ) */}
            {/* }        */}
          </tbody>
          
           
          
        </table>
      </div>
    );
  }
  
  export default Chr2;