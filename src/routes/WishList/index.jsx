import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
function WishList() {

   const [wishlistItems, setWishlistItems] = useState([]);

   // const addToWishlist = (item) => {
   //    setWishlistItems([...wishlistItems, item]);
   // };

   const removeFromWishlist = (itemId) => {
      const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
      setWishlistItems(updatedWishlist);
   };

   return (
      <Container>
         <div className='py-4 py-lg-5'>
            <h2>Wishlist</h2>
            {wishlistItems.length === 0 ? (
               <p>Your wishlist is empty.</p>
            ) : (
               <ul>
                  {wishlistItems.map((item) => (
                     <li key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </Container>
   )
}

export default WishList
