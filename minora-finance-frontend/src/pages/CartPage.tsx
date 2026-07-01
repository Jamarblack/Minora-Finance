import { useCart } from '../context/CartContext';
import { X, Minus, Plus } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="w-full pt-32 pb-32 px-6 md:px-12 max-w-5xl mx-auto min-h-[70vh]">
      <h1 className="text-3xl font-extrabold uppercase tracking-tight mb-12">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="font-serif text-gray-600">Your cart is currently empty.</p>
      ) : (
        <div className="flex flex-col gap-8">
          
          {/* Cart Items List */}
          <div className="flex flex-col gap-8 md:gap-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-start md:items-center justify-between border-b border-gray-300 pb-6 gap-4 md:gap-6">
                
                {/* Image */}
                <img src={item.image} alt={item.title} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded flex-shrink-0" />

                {/* Details Container */}
                <div className="flex flex-col md:flex-row md:items-center justify-between flex-1 gap-4 md:gap-0">
                  
                  {/* Title */}
                  <span className="font-serif text-base md:text-lg font-medium md:w-1/2 leading-snug">
                    {item.title}
                  </span>

                  {/* Controls, Price, Remove - Grouped for mobile bottom row */}
                  <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 font-serif border border-gray-200 md:border-none rounded-md px-2 py-1 md:p-0">
                      <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-gray-500 py-1 px-1"><Minus size={16} /></button>
                      <span className="w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-gray-500 py-1 px-1"><Plus size={16} /></button>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="font-serif text-base md:text-lg font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-black transition-colors p-1">
                        <X size={20} />
                      </button>
                    </div>

                  </div>
                </div>
                
              </div>
            ))}
          </div>

          {/* Subtotal & Checkout */}
          <div className="flex justify-end mt-4">
            <div className="w-full max-w-sm">
              <div className="flex justify-between items-center mb-8 border-b border-gray-300 pb-4">
                <span className="font-serif text-lg">Subtotal</span>
                <span className="font-serif text-2xl">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full border border-black py-4 uppercase tracking-widest text-sm font-mono hover:bg-black hover:text-white transition-colors">
                Checkout
              </button>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}