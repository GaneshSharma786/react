import React, {useState} from 'react'; //day-2





// ok some changes




//day-1 props


// function Second (props) {
//     const  divStyle = {
//         color: 'red',
//         fontFamily: 'monospace',
//     };
//     return(
//         <div>

//             <h1 style={divStyle}> second component from {props.name} Age is {props.age}</h1>

//         </div>
//     );
// }
// export default Second;







                    //day-2 state


function Second (props) {
    const [num, setNum] = useState(1);
    
    return(
        <div>

            <button onClick={() =>{
                setNum(num + 1);
            }}>Click +</button>
            <p>{num}</p>

            <button onClick={() =>{
                setNum(num - 1);
            }}>Click -</button>


        </div>
    );
    }
export default Second;
