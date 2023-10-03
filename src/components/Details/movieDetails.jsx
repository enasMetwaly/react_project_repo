// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import MovieDetails from "../../pages/MovietDetails"
// import { useSelector, useDispatch } from 'react-redux';
// import { addToWatchList } from '../../store/slices/watchListSlice'; // Import your cartSlice actions
// import { removeFromWatchList } from '../../store/slices/watchListSlice'; // Import the removeFromCart action



// export default function DetailedMovie({ movieItem }) {
//     const dispatch = useDispatch();

//     const handleAddToWatchList = () => {
//       dispatch(addToWatchList(movieItem)); // Dispatch the addToCart action with the product
//     };

//     // Access the cart state from Redux
// const listItems = useSelector(state => state.cart.items);
// const handleRemoveItem = itemId => {
//     dispatch(removeFromWatchList(itemId));
//   };

  
//     return (
//         <div class="container-fluid py-5">
//             <div class="container">
//                 <div class="row g-5 align-items-center">
//                     <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
//                         <h1 class="text-primary mb-4">{movieItem.title}</h1>
//                         <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non
//                         </p>
//                         <div className="" >
//                         <h5 className="card-title  mt-2">Rating:</h5>
//                         </div>
//                         <hr/>
//                         <div>
//                             <h2> Original Price: {movieItem.price}$</h2>
//                                 <div className="mt-3">


//                                 {movieItem.discountPercentage ? (
//                                     <>
//                                     <span className="badge rounded-pill text-bg-success">
//                                         Discount: {`${Math.round(movieItem.discountPercentage)}%`}
//                                     </span>
//                                     <span className="badge rounded-pill text-bg-warning">
//                                         Price After Discount: ${`${Math.round(
//                                         movieItem.price -
//                                             (movieItem.price * movieItem.discountPercentage) / 100
//                                         )}`}
//                                     </span>
//                                     </>
//                                 ) : (
//                                     <span className="badge rounded-pill text-bg-danger">No Discount</span>
//                                 )}
//                             </div>      

//                         </div>
//                         <hr></hr>
//                         <div>
//                         {movieItem.stock === 0 ? (
//                             <button type="button" className="btn btn-danger">
//                                 out of stock
//                             </button>
//                             ) : (
//                             <button type="button" className="btn btn-success">
//                                 In stock
//                             </button>
//                             )}

//                         </div>
//                         <hr></hr>
//                         <div className=" d-flex flex-column ">
//                         <div className="d-flex  mx-5">
//                         {cartItems.map(item => (
//                             <div className="d-flex m-3" key={item.id}>
//                                 {item.quantity > 0 && (
//                                 <>
//                                     <button className='btn btn-warning' onClick={() => handleRemoveItem(item.id)}> - </button>
//                                     <h4 className="align-middle mx-4">
//                                     <strong>{item.quantity}</strong>
//                                     </h4>
//                                     <button className='btn btn-success' onClick={() => handleAddToWatchList(item.id)}> + </button>
//                                 </>
//                                 )}
//                             </div>
//                             ))}

//                             </div>
//                             <div>
//                             </div>
//                             <div>
                                
//                             </div>
//                             <div className="d-flex m-3">
//                             <button type="button" class="btn btn-primary btn-sm  m-2">Buy Now</button>
//                             <button class="btn btn-primary btn-sm  m-2" onClick={() => handleAddToCart(movieItem.id)} type="button" class="btn btn-secondary btn-sm">Add to chart</button>


//                             </div>
                            

//                         </div>
//                         <hr></hr>





//                     </div>
//                 </div>
//             </div>
//         </div>
    

//     );

// }
