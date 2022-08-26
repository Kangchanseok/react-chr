

function Chr1() {
    function test(){
        let arr = []
        for (let i = 1; i < 11; i++){
            arr.push(<img src={'chr1/1-' + i + '.png'}></img>)
        }
        return arr
    }
    return (
      <div className="Chr1">
          <p>
            {test()}
            </p>
          
      </div>
    );
  }
  
  export default Chr1;