import Team1 from '../assets/sbk.webp';
import Team2 from '../assets/afm.webp';
import Team3 from '../assets/KGP-scaled.webp';
import Team4 from '../assets/msb.webp';
import Team5 from '../assets/pbm-min.webp';
import Team6 from '../assets/MR.-T-B-PATIL-scaled.webp';
import Team7 from '../assets/feroj-pathan-min.webp';
import Team8 from '../assets/anil-rokade-min-scaled.webp';
import { useState } from 'react';
import DeanMessage from '../assets/dean_message.png';
import TPOMessage from '../assets/tpomessage.png';

const Placement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <section className='py-5 md:py-10'>
      <div className='container text-center'>
        <div className='max-w-screen-md mx-auto'>
          <h2 className='text-2xl font-semibold mb-3 md:text-3xl lg:text-4xl xl:text-5xl'>
            Training & Placements Cell
          </h2>

          {/* Vision and Mission */}
          <div className='text-start mt-10 p-5 border-border border-2 rounded-xl w-full shadow-primary shadow-sm backdrop-blur-xl'>
            <p className='text-primary text-2xl'>Vision : </p>
            <p className='section-text mb-10'>
              To create career opportunities to Engineering and Management
              graduates.
            </p>

            <p className='text-primary text-2xl'>Mission : </p>
            <p className='section-text'>
              - To provide soft skill and technical expertise to career
              challenges. <br />- To strengthens the relation of industry
              institute interactions.
            </p>
          </div>

          {/*  options  */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Message from Dean Training & Placements</p>
              <button
                onClick={() => handleButtonClick(DeanMessage)}
                className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition lg:w-full'
              >
                View
              </button>
            </div>

            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Message from Training & Placements Officer</p>
              <button
                onClick={() => handleButtonClick(TPOMessage)} // Same image abhi ke liye
                className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition lg:w-full'
              >
                View
              </button>
            </div>

            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Placements of our Students</p>
              <button
                className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition lg:w-full'
              >
                View
              </button>
            </div>

            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Placements Policy</p>
              <button
                className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition lg:w-full'
              >
                View
              </button>
            </div>

            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Internship Policy</p>
              <button
                className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition lg:w-full'
              >
                View
              </button>
            </div>

            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Gallery</p>
              <button
                className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition lg:w-full'
              >
                View
              </button>
            </div>
          </div>

          {/* View Button Popup*/}
          {isModalOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4'>
              <div className='bg-white p-6 rounded-xl w-full max-w-3xl max-h-[80vh] overflow-auto shadow-2xl'>
                <img
                  src={selectedImage}
                  alt='Popup'
                  className='w-full h-auto object-contain rounded-lg'
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className='mt-6 bg-primary text-white px-5 py-2 rounded-md hover:bg-blue-600 transition text-base font-medium w-full'
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Placement Team */}
          <h2 className='text-2xl font-semibold mb-3 mt-10 md:text-3xl lg:text-4xl xl:text-5xl'>
            Training & Placements Team
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
            {/* Repeatable Team Member Cards */}
            {[
              {
                img: Team1,
                name: 'Mr. Sanjay Kalyankar',
                role: 'Associate Professor & Dean T&P',
              },
              {
                img: Team2,
                name: 'Mr. Amar Mali',
                role: 'Training & Placements Officer',
              },
              {
                img: Team3,
                name: 'Mr. Kavish Patwari',
                role: 'T&P Coordinator Civil Engineering',
              },
              {
                img: Team4,
                name: 'Mr. Mahesh Badmera',
                role: 'T&P Coordinator ETC',
              },
              {
                img: Team5,
                name: 'Mr. Pravin Mahadik',
                role: 'T&P Coordinator CSE',
              },
              {
                img: Team6,
                name: 'Mr. Tejas Patil',
                role: 'T&P Coordinator Mechanical Engineering',
              },
              {
                img: Team7,
                name: 'Dr. Feroz Pathan',
                role: 'T&P Coordinator MBA',
              },
              {
                img: Team8,
                name: 'Mr. Anil Rokade',
                role: 'T&P Coordinator CSE(AIML)',
              },
            ].map((member, index) => (
              <div
                key={index}
                className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl text-center flex flex-col'
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className='w-24 h-24 mx-auto rounded-full mb-4 object-cover'
                />
                <p className='font-semibold mb-2'>{member.name}</p>
                <p className='text-sm text-gray-400'>{member.role}</p>
                <div className='mt-auto'>
                  <button className='mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
