import Team1 from '../assets/sbk.webp';
import Team2 from '../assets/afm.webp';
import Team3 from '../assets/KGP-scaled.webp';
import Team4 from '../assets/msb.webp';
import Team5 from '../assets/pbm-min.webp';
import Team6 from '../assets/MR.-T-B-PATIL-scaled.webp';
import Team7 from '../assets/feroj-pathan-min.webp';
import Team8 from '../assets/anil-rokade-min-scaled.webp';




const Placement = () => {
  return (
    <section className='py-5 md:py-10'>
      <div className='container text-center'>
        <div className='max-w-screen-md mx-auto'>
          <h2 className='text-2xl font-semibold mb-3 md:text-3xl lg:text-4xl xl:text-5xl'>
            Traning & Placements Cell
          </h2>
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

          {/* 6 Divs Added Here */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
            <div className='p-5 border rounded-xl  shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Message from Dean Training & Placements </p>
              <button className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition lg:w-full'>
                View
              </button>
            </div>
            <div className='p-5 border rounded-xl  shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Message from Training & Placements Officer</p>
              <button className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition  lg:w-full'>
                View
              </button>
            </div>
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Placements of our Students</p>
              <button className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition  lg:w-full'>
                View
              </button>
            </div>
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Placements Policy</p>
              <button className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition  lg:w-full'>
                View
              </button>
            </div>
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Internship Policy</p>
              <button className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition  lg:w-full'>
                View
              </button>
            </div>
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl'>
              <p>Gallery</p>
              <button className='mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition  lg:w-full'>
                View
              </button>
            </div>
          </div>
          {/* End of 6 Divs */}


          <h2 className='text-2xl font-semibold mb-3 mt-10 md:text-3xl lg:text-4xl xl:text-5xl'>
            Traning & Placements Team
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
          
            {/* 1st Team Member */}
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl text-center flex flex-col'>
              <img
                src={Team1}
                alt='Profile 1'
                className='w-24 h-24 mx-auto rounded-full mb-4 object-cover'
              />
              <p className='font-semibold mb-2'>Mr. Sanjay Kalyankar</p>
              <p className='text-sm text-gray-400'>
                Associate Professor & Dean T&P
              </p>
              <div className='mt-auto'>
                <button className='mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
                  View Profile
                </button>
              </div>
            </div>

            {/* 2nd Team Member */}
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl text-center flex flex-col'>
              <img
                src={Team2}
                alt='Profile 2'
                className='w-24 h-24 mx-auto rounded-full mb-4 object-cover'
              />
              <p className='font-semibold mb-2'>Mr. Amar Mali</p>
              <p className='text-sm text-gray-400'>
                Training & Placements Officer
              </p>
              <div className='mt-auto'>
                <button className='mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
                  View Profile
                </button>
              </div>
            </div>

            {/* 3rd Team Member */}
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl text-center flex flex-col'>
              <img
                src={Team3}
                alt='Profile 3'
                className='w-24 h-24 mx-auto rounded-full mb-4 object-cover'
              />
              <p className='font-semibold mb-2'>Mr. Kavish Patwari</p>
              <p className='text-sm text-gray-400'>
                T&P Coordinator Civil Engineering
              </p>
              <div className='mt-auto'>
                <button className='mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
                  View Profile
                </button>
              </div>
            </div>

            {/* 4th Team Member */}
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl text-center flex flex-col'>
              <img
                src={Team4}
                alt='Profile 4'
                className='w-24 h-24 mx-auto rounded-full mb-4 object-cover'
              />
              <p className='font-semibold mb-2'>Mr. Mahesh Badmera</p>
              <p className='text-sm text-gray-400'>T&P Coordinator ETC</p>
              <div className='mt-auto'>
                <button className='mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
                  View Profile
                </button>
              </div>
            </div>

            {/* 5th Team Member */}
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl text-center flex flex-col'>
              <img
                src={Team5}
                alt='Profile 5'
                className='w-24 h-24 mx-auto rounded-full mb-4 object-cover'
              />
              <p className='font-semibold mb-2'>Mr. Pravin Mahadik</p>
              <p className='text-sm text-gray-400'>T&P Coordinator CSE</p>
              <div className='mt-auto'>
                <button className='mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
                  View Profile
                </button>
              </div>
            </div>

            {/* 6th Team Member */}
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl text-center flex flex-col'>
              <img
                src={Team6}
                alt='Profile 6'
                className='w-24 h-24 mx-auto rounded-full mb-4 object-cover'
              />
              <p className='font-semibold mb-2'>Mr. Tejas Patil</p>
              <p className='text-sm text-gray-400'>
                T&P Coordinator Mechanical Engineering
              </p>
              <div className='mt-auto'>
                <button className='mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
                  View Profile
                </button>
              </div>
            </div>

            {/* 7th Team Member */}
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl text-center flex flex-col'>
              <img
                src={Team7}
                alt='Profile 7'
                className='w-24 h-24 mx-auto rounded-full mb-4 object-cover'
              />
              <p className='font-semibold mb-2'>Dr. Feroz Pathan</p>
              <p className='text-sm text-gray-400'>T&P Coordinator MBA</p>
              <div className='mt-auto'>
                <button className='mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
                  View Profile
                </button>
              </div>
            </div>

            {/* 8th Team Member */}
            <div className='p-5 border rounded-xl shadow-primary shadow-sm backdrop-blur-xl text-center flex flex-col'>
              <img
                src={Team8}
                alt='Profile 8'
                className='w-24 h-24 mx-auto rounded-full mb-4 object-cover'
              />
              <p className='font-semibold mb-2'>Mr. Anil Rokade</p>
              <p className='text-sm text-gray-400'>T&P Coordinator CSE(AIML)</p>
              <div className='mt-auto'>
                <button className='mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
