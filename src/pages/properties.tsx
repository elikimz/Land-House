import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Define the interface for a property with multiple images
interface Property {
  title: string;
  price: string;
  description: string;
  images: string[]; // Array of images
  details: string;
}

const Properties: React.FC = () => {
  // Sample properties with multiple images and details
  const properties: Property[] = [
    {
      title: 'Stunning Oceanfront Lot',
      price: '',
      description: 'Experience breathtaking views and serenity by the ocean.',
      images: [
        'https://i.postimg.cc/dQSPgvqJ/1.jpg',
        // 'https://example.com/image2.jpg', // Additional images
        // 'https://example.com/image3.jpg',
      ],
      details: 'This prime oceanfront land is perfect for building your dream home with unobstructed views and easy beach access.',
    },
    {
      title: 'Tranquil Countryside Retreat',
      price: '',
      description: 'A perfect location for a peaceful escape with scenic surroundings.',
      images: [
        'https://i.postimg.cc/cH425k2K/2.jpg',
        'https://i.postimg.cc/ZR72kFzw/3.jpg',
      ],
      details: 'This property is ideal for a country home, surrounded by rolling hills and lush landscapes, perfect for nature lovers.',
    },
    // Add more properties similarly...
  ];

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const openModal = (property: Property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <>
      <div>
        <Navbar />
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-8">Available Properties</h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {/* Displaying all properties */}
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <img src={property.images[0]} alt={property.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <p className="text-gray-700">{property.price}</p>
                  <p className="mt-2 text-gray-600">{property.description}</p>
                  <button
                    onClick={() => openModal(property)}
                    className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for Property Details */}
        {selectedProperty && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 max-w-3xl mx-auto flex flex-col lg:flex-row">
              <div className="flex-1 lg:max-w-xs lg:mr-4">
                {/* Displaying all images */}
                {selectedProperty.images.map((image, idx) => (
                  <img key={idx} src={image} alt={`Image ${idx + 1}`} className="w-full h-auto rounded-md mb-4" />
                ))}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{selectedProperty.title}</h3>
                <p className="text-gray-700">{selectedProperty.price}</p>
                <p className="mt-2 text-gray-600">{selectedProperty.details}</p>
                <button
                  onClick={closeModal}
                  className="mt-4 inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Properties;
