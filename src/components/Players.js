import React, { Component } from "react";
import { Players } from '../shared/ListOfPlayers';


export default class player extends Component {
    render() {
    return (
            <div className='container'>
            {Players.map((player)=>(
                <div className='column'>
                    <div className='card'>
                        <img src={player.img}/>
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                ))}
            </div>
        ) 
    }
}



// export default class Players extends Component {
//     render() {
//         return (
//             <div className='container'>
//                 {/* {ListOfPlayers.map((player)=>( */}
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='images/cr.jpg'/>
//                         <h3>Cristiano Ronado</h3>
//                         <p className='title'>Manchester United</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='images/kante.jpg'/>
//                             <h3>Kante</h3>
//                                 <p className='title'>Chelsea</p>
//                                 <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='images/messi.jpg'/>
//                             <h3>Messi</h3>
//                                 <p className='title'>PSG</p>
//                                 <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='images/neymar.jpg'/>
//                             <h3>Neymar</h3>
//                                 <p className='title'>PSG</p>
//                                 <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='images/kane.jpg'/>
//                             <h3>Kane</h3>
//                                 <p className='title'>Tottemham</p>
//                                 <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='images/haaland.jpg'/>
//                             <h3>Haaland</h3>
//                                 <p className='title'>Manchester City</p>
//                                 <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 {/* ))} */}
//             </div>
//         )
//     }
// }