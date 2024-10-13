import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Define an interface for the property type
interface Property {
  title: string;
  price: string;
  description: string;
  details: string;
  media: string; // Main media can be an image or video
  additionalMedia: string[]; // Array can contain images or videos
}

const Home: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [mainMedia, setMainMedia] = useState<string | null>(null);

  const properties: Property[] = [
    {
      title: 'Luxury Villa',
      price: '230M',
      description: 'It has 1 Kitchen, 3 lounges, 1 dining, 9 bedroomed ensuite, 3 share bathrooms. In total 11 bedrooms, Swimming pool, Sauna, Changing room and gym, Barbecue area, Servant quarters for two, Big balcony upstairs overlooking Gong hills, Ample water supply. Sitting on 5 acres.',
      details: 'This luxury villa features 4 bedrooms, 3 bathrooms, a swimming pool, and a large garden.',
      media: "https://i.postimg.cc/c4t0RgdY/51.jpg", // Can be a video URL too
      additionalMedia: [
        "https://i.postimg.cc/qv8rFPhv/52.jpg",
        // Example video URL
        "https://i.postimg.cc/qqPfbwpK/54.jpg",
        "https://i.postimg.cc/2jMfSkn5/55.jpg",
        "https://i.postimg.cc/3JGQysZF/56.jpg",
      ],
    },
    {
      title: 'Modern Apartment',
      price: 'House for sale along Kiseriani Shopping Center',
      description: 'Selling for 90M (negotiable); monthly income: 130K.',
      details: 'The apartment features two bedrooms.',
      media: "https://i.postimg.cc/43qrNwhS/6.jpg",
      additionalMedia: [
        "https://i.postimg.cc/43qrNwhS/6.jpg",
       "https://www.youtube.com/watch?v=DujLjGCqzgo",  // Another example video
       "https://www.youtube.com/watch?v=3mso28oVijk",
       "https://www.youtube.com/watch?v=hHQSlzlx_a4", //
      ],
    }
    // Add more properties here...
  ];

  const openModal = (property: Property) => {
    setSelectedProperty(property);
    setMainMedia(property.media);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setMainMedia(null);
  };

  const changeMainMedia = (media: string) => {
    setMainMedia(media);
  };

  const isVideo = (url: string) => {
    return url.includes('youtube.com') || url.includes('vimeo.com'); // Add more video platforms if needed
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
                {isVideo(property.media) ? (
                  <iframe
                    src={property.media.replace("watch?v=", "embed/")}
                    title={property.title}
                    className="w-full h-60 object-cover" // Adjust height
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={property.media}
                    alt={property.title}
                    className="w-full h-60 object-cover" // Adjust height
                  />
                )}
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
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-white p-4 rounded-lg w-11/12 max-w-4xl flex flex-col md:flex-row shadow-lg">
              <div className="md:w-1/2 p-2">
                {/* Main Media Display */}
                {mainMedia && (
                  isVideo(mainMedia) ? (
                    <iframe
                      src={mainMedia.replace("watch?v=", "embed/")}
                      title="Main view"
                      className="w-full h-auto object-cover rounded-md"
                      allowFullScreen
                    />
                  ) : (
                    <img src={mainMedia} alt="Main view" className="w-full h-auto object-cover rounded-md" />
                  )
                )}
              </div>
              <div className="md:w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProperty.title}</h2>
                  <p className="text-lg mb-2">{selectedProperty.price}</p>
                  <p className="text-gray-700 mb-4">{selectedProperty.details}</p>

                  {/* Additional Media */}
                  <div className="flex overflow-x-auto space-x-2 mb-4">
                    {selectedProperty.additionalMedia.map((media, idx) => (
                      isVideo(media) ? (
                        <iframe
                          key={idx}
                          src={media.replace("watch?v=", "embed/")}
                          title={`Additional view ${idx + 1}`}
                          className="w-32 h-32 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105"
                          allowFullScreen
                          onClick={() => changeMainMedia(media)} // Change the main media on click
                        />
                      ) : (
                        <img
                          key={idx}
                          src={media}
                          alt={`Additional view ${idx + 1}`}
                          className="w-32 h-32 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105"
                          onClick={() => changeMainMedia(media)} // Change the main media on click
                        />
                      )
                    ))}
                  </div>
                </div>

                <button onClick={closeModal} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
