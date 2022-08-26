

function Chr2() {
    function test2(){
        let arr = []
        for (let i = 1; i < 11; i++){
            arr.push(<img src={'chr2/2-' + i + '.png'}></img>)
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