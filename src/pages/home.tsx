import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Define an interface for the property type
interface Property {
  title: string;
  price: string;
  description: string;
  details: string;
  image: string;
}

const Home: React.FC = () => {
  // State to manage the selected property for the modal
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Array of property objects with details
  const properties: Property[] = [
    {
      title: 'Luxury Villa',
      price: '$500,000',
      description: 'A beautiful villa with stunning views and modern amenities.',
      details: 'This luxury villa features 4 bedrooms, 3 bathrooms, a swimming pool, and a large garden.',
      image: "https://imgs.search.brave.com/suAl31Q0ZEsRfCIg1Mx8DJX6n4YJ59EdnMmd2rm-33A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzA1LzMwLzk0/LzM2MF9GXzIwNTMw/OTQ0NF9DSHdzRmpU/MHcwOWdxeXppMXpQ/OGFoUEh5TGlUMEs2/Mi5qcGc",
    },
    {
      title: 'Modern Apartment',
      price: '$300,000',
      description: 'Stylish apartment in the heart of the city.',
      details: 'This apartment offers 2 bedrooms, a spacious living area, and close proximity to local shops and restaurants.',
      image: "https://imgs.search.brave.com/EhiOXJnyebaz-Vp8cVc1JHBYp5iUWI-nMX1u1l1-lZs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/OTIxMjQxMy9waG90/by9yb3ctaG91c2Vz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1WOU1QQ3RBSUFV/VHRQWkpZYjYwZnVy/WVdNbENrUDhFSVFH/ZVdaU0lXZy00PQ",
    },
    {
      title: 'Cozy Cottage',
      price: '$200,000',
      description: 'A charming cottage perfect for a small family.',
      details: 'This cozy cottage includes 2 bedrooms, a quaint garden, and a lovely fireplace for those cold evenings.',
      image: "https://imgs.search.brave.com/53VxCK03M9ToZoUjQJnmAhUG-leDkldW9AtB1gMw84g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODg2/MjExNDAvcGhvdG8v/ZXh0ZXJpb3Itb2Yt/bW9kZXJuLWhvdXNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1aeGxqMHRNcV9x/ZG10YXVOaFBqdl9R/THBURXRxQS1Da0VR/anFjQzd0NVg4PQ",
    },
    {
      title: 'Spacious Family Home',
      price: '$750,000',
      description: 'Perfect for larger families with plenty of space.',
      details: 'This home features 5 bedrooms, a large backyard, and a two-car garage.',
      image: "https://imgs.search.brave.com/MUO62NbVqlXDEGtCEcR914KzOpr9U1MV8YnY6YvvPtU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/NTg4Njg4Ny9waG90/by9mcmVzaGx5LXBh/aW50ZWQtY3JhZnRz/bWFuLWJ1bmdhbG93/LWhvdXNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1sY3dp/eUpxalVvSU0wRmZS/YjNUd1YyQnpVWThS/UzdvVDl6Rm1aR3Y0/bkxJPQ",
    },
    {
      title: 'Chic Urban Loft',
      price: '$450,000',
      description: 'An industrial-style loft in a trendy neighborhood.',
      details: 'This urban loft features high ceilings, exposed brick, and is surrounded by local cafes and boutiques.',
      image: "https://imgs.search.brave.com/gHy_gnP7ycWUxo8gcz_rQmZJaXMA7szE7K6pZiqNUtg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/Njg1NjI1MS9waG90/by9jb2xvbmlhbC1o/b3VzZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9X3RHaWl4/X0hUUWtKajJwaVRz/aWxNdVZlZjl2Mm5V/d0VrU0M5QWxvODlC/TT0",
    },
    {
      title: 'Elegant Mansion',
      price: '$1,500,000',
      description: 'A grand mansion with luxurious features.',
      details: 'This mansion boasts 6 bedrooms, a home theater, and an exquisite swimming pool.',
      image: "https://imgs.search.brave.com/hF_Ur2Qc7ord0wgoT7eImSVCrq-9ecRIiBNYZzAasn4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/OTQ1NjI0My9waG90/by9hbi1lbGV2YXRl/ZC12aWV3LW9mLWxv/bmRvbi1ob3VzZXMt/YXQtc3Vuc2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1o/ZzlfRUpvQzFSNzhX/MWJiQTljSmRkSV9K/WElHcnhkSDlqSjRf/NUpQX3l3PQ",
    }
  ];

  // Function to open the modal with selected property details
  const openModal = (property: Property) => {
    setSelectedProperty(property);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://imgs.search.brave.com/763Q_NDFCA81QTxIPcXS6oxnGvS1C97UprkClrixVyQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAz/NTcyOTM0MC9waG90/by8xOTUwcy1taWQt/Y2VudHVyeS1tb2Rl/cm4tYnVuZ2Fsb3ct/cmVhbC1lc3RhdGUt/Zm9yLXNhbGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWpi/d0JDSmdXanhydWQy/SXUyTWlqcFVtek15/eFRTRldzY3Zwa3JI/N2dWLVk9')" }}>
          <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
            <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-xl mb-8">Explore our wide range of properties available for sale</p>
            <a href="properties" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">View Properties</a>
          </div>
        </section>

        {/* Properties Section */}
        <section id="properties" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-8">Featured Properties</h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {/* Property Cards */}
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <p className="text-gray-700">{property.price}</p>
                  <p className="text-gray-600">{property.description}</p>
                  <button onClick={() => openModal(property)} className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <Footer />

        {/* Modal for Property Details */}
        {selectedProperty && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
              <h2 className="text-2xl font-bold mb-2">{selectedProperty.title}</h2>
              <p className="text-lg mb-2">{selectedProperty.price}</p>
              <p className="text-gray-700 mb-4">{selectedProperty.details}</p>
              <button onClick={closeModal} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
