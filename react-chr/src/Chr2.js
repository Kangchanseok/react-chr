

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
    return (
      <div className="Chr2">
          <p>
            {test2()}
            </p>
          
      </div>
    );
  }
  
  export default Chr2;