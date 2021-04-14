import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <>
    <div className="cards">
     <div className="card">
         <img src="https://picsum.photos/200/300" alt="myPic" className="card__img"/>
         <div className="card_info">
             <span className="card__category">A Netflix Original Series</span>
             <h3 className="card__title">Dark</h3>
             <a href="" target="_blank">
                 <button>Watch Now</button>
             </a>
         </div>
     </div>
     </div>   
 </>,
    document.getElementById("root")
);