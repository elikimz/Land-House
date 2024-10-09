import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Define the interface for a property
interface Property {
  title: string;
  price: string;
  description: string;
  image: string;
  details: string;
}

const Properties: React.FC = () => {
  // Sample properties with images and details
  const properties: Property[] = [
    {
      title: 'Spacious Residential Land',
      price: '$750,000',
      description: 'A large plot of land ready for your dream home.',
      image: 'https://imgs.search.brave.com/0nd1T_VskOLYNlBIPWF3cdr9Oygv1tFI89-1oDHoF5w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bGFuZHNlYXJjaC5j/b20vbGlzdGluZ3Mv/NHJOY2ovc21hbGwv/ZnJhbmtsaW4tdG4t/MTE3NjY2NjQwLmpw/Zw',
      details: 'This residential land offers a prime location for a custom home, surrounded by nature and amenities.',
    },
    {
      title: 'Beautiful Landscape Land',
      price: '$500,000',
      description: 'Ideal for agriculture or leisure activities.',
      image: 'https://imgs.search.brave.com/Bbp9Do5Ws2PClPJf-HxrJMyx1tZniuhzZpYsdBvbykk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bGFuZHNlYXJjaC5j/b20vbGlzdGluZ3Mv/NHprMksvc21hbGwv/Y3JvZnRvbi1reS0x/MTkyNDEwMzguanBn',
      details: 'This land is perfect for agriculture or building your dream retreat in a tranquil setting.',
    },
    {
      title: 'Commercial Land in Prime Location',
      price: '$1,200,000',
      description: 'An excellent opportunity for development.',
      image: 'https://imgs.search.brave.com/GyWH4n3sYxLNWXgQjR6SR-32HQOdGBwEB2tPXs-e9BA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kMWph/OXR5bzhuYmtiYy5j/bG91ZGZyb250Lm5l/dC81MDUxMzY1M19T/MDAzNS9TMDAzNS9T/MDAzNS1SMDEwMC9S/VEMyNjk2MDA5LzY2/Y2JkZDcxN2I5OGJh/N2UwOTE2NmQ5NC5q/cGc_dmVyc2lvbj0x/NzI0NjM3MTk4Jndp/ZHRoPTY0MA',
      details: 'Located in a bustling area, this commercial land is perfect for your next business venture.',
    },
    {
      title: 'Lush Green Land with River View',
      price: '$850,000',
      description: 'A stunning piece of land with a river running through it.',
      image: 'https://imgs.search.brave.com/Ij0-Q9tQyptl5G8ow1yOIv46Gm6ZxQ7VWLqWhyZp4xg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODg4/Nzg0NzcvcGhvdG8v/ZXh0ZXJpb3Itdmll/dy1vZi1ob21lLWZv/ci1zYWxlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1BUHJF/SmluQ1VDdUptVUh4/T2pFSUp1NndkbGhv/bzdycGhmQko1LW1v/ZnlvPQ',
      details: 'This land features lush greenery and a beautiful river view, perfect for a peaceful retreat or investment.',
    },
    {
      title: 'Prime Location for Future Development',
      price: '$600,000',
      description: 'A plot with great potential near urban areas.',
      image: 'https://imgs.search.brave.com/mkDNrtGnd0xXNYqjx1drbm0dTb9yadiKqWlsWPesLrk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODM4/MDI1MDgvcGhvdG8v/c3RhaXJzLWxlYWRp/bmctdG8tY3JhZnRz/bWFuLWhvdXNlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1B/aTJWUkVzWlItbDhY/UGYwQ241VktwdXR6/bXYwYlNrNENvVVVX/M0RaZjFJPQ',
      details: 'This plot is located near key urban areas, making it a prime candidate for future development.',
    },
    {
      title: 'Exclusive Land in Gated Community',
      price: '$950,000',
      description: 'Secure land in a prestigious area.',
      image: 'https://imgs.search.brave.com/uQpVNKqsXJuYYtfAte5MQ-Td5RJ9Pu08so2ix0V-DMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQ4/NTQ5Mjg2L3Bob3Rv/L2RyZWFtLWhvbWUt/bHV4dXJ5LWhvdXNl/LXN1Y2Nlc3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNq/aG9OcW9tTlR4Z1lX/eHVaOUV2NVB4Wmg2/V1k5NnZ2REdmM0hs/LTd4LVU9',
      details: 'This exclusive land is located in a gated community, providing privacy and security in a beautiful setting.',
    },
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
            {/* Displaying all properties directly */}
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
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
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
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
        )}
        <Footer />
      </div>
    </>
  );
};

export default Properties;
