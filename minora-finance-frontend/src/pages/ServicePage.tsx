import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart, type CartItem } from '../context/CartContext';
import { X } from 'lucide-react';
import engine from '../assets/engine.png';
import foundation from '../assets/foundation.png';
import families from '../assets/families.png';

const SERVICES = [
  {
    id: 'engine',
    title: 'Building Your Financial Engine',
    desc: 'We focus on tax-efficient growth through RRSP and TFSA optimization, ensuring that your wealth compounds effectively over decades.',
    image: engine , // Map these to your actual assets
    price: 150,
  },
  {
    id: 'foundation',
    title: 'Protecting Your Foundation',
    desc: 'We integrate Life, Critical Illness, and Income Protection strategies into your overall wealth plan.',
    image: foundation,
    price: 200,
  },
  {
    id: 'families',
    title: 'Creating Financially Smart Families',
    desc: 'We help you structure education funds (RESPs) to give your children a head start.',
    image: families ,
    price: 350,
  }
];

export default function ServicePage() {
  const { addToCart, cartCount } = useCart();
  const navigate = useNavigate();
  const [modalItem, setModalItem] = useState<CartItem | null>(null);

  const handleAddToCart = (service: typeof SERVICES[0]) => {
    const item = { ...service, quantity: 1 };
    addToCart(item);
    setModalItem(item);
  };

  return (
    <div className="w-full pt-32 pb-24">
      {/* Service List */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Text Side */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif mb-4">{service.title}</h2>
              <p className="font-serif text-gray-700 text-lg mb-8 leading-relaxed">{service.desc}</p>
              <button 
                onClick={() => handleAddToCart(service)}
                className="border border-black px-8 py-4 uppercase tracking-widest text-sm font-mono hover:bg-black hover:text-white transition-colors"
              >
                Get Started
              </button>
            </div>
            
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <img src={service.image} alt={service.title} className="w-full rounded-2xl shadow-sm object-cover aspect-[4/3]" />
            </div>
            
          </div>
        ))}
      </div>

      {/* Cart Modal Overlay */}
      {modalItem && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start pt-24 pr-4 md:pr-12 md:justify-end">
          <div className="bg-[#8a8a8a] text-white p-6 rounded-md shadow-xl w-full max-w-sm relative">
            <button onClick={() => setModalItem(null)} className="absolute top-4 right-4 hover:text-gray-300">
              <X size={20} />
            </button>
            
            <h3 className="font-bold text-xl mb-4">Added to cart!</h3>
            
            <div className="flex gap-4 mb-6">
              <img src={modalItem.image} alt={modalItem.title} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <p className="font-serif text-sm font-semibold">{modalItem.title}</p>
                <p className="font-serif text-xs mt-1">1x</p>
              </div>
              <p className="font-bold">${modalItem.price.toFixed(2)}</p>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => { setModalItem(null); navigate('/cart'); }}
                className="w-1/2 border border-white py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors"
              >
                View Cart ({cartCount})
              </button>
              <button 
                onClick={() => { setModalItem(null); navigate('/cart'); }}
                className="w-1/2 bg-[#e0e0e0] text-black py-3 text-sm font-bold hover:bg-white transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}