import { MapPin, Phone, Mail } from "lucide-react"; // Import Lucide icons

const ContactPage = () => {
  return (
    <section className="py-5 md:py-10 bg-background">
      <div className="container text-center">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl font-semibold mb-10 md:text-4xl lg:text-5xl xl:text-6xl">
            Contact DIEMS
          </h2>
          <div className="flex flex-col gap-10 justify-center">
            {/* Address Section */}
            <div className="border-2 border-border p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#254B88] transition duration-300">
              <div className="flex justify-center items-center mb-3">
                <MapPin size={32} className="text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Address</h3>
              <p>
                Deogiri Institute of Engineering and Management Studies, Railway
                Station Road, Chhatrapati Sambhajinagar – 431005
              </p>
            </div>
            {/* Phone and Email Section (stacked vertically on smaller screens) */}
            <div className="flex flex-col md:flex-row gap-10 justify-center w-full">
              {/* Phone Section */}
              <div className="border-2 border-border p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#254B88] transition duration-300 w-full md:w-1/3">
                <div className="flex justify-center items-center mb-3">
                  <Phone size={32} className="text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <p>0240-2367567</p>
              </div>
              {/* Email Section */}
              <div className="border-2 border-border p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#254B88] transition duration-300 w-full md:w-1/3">
                <div className="flex justify-center items-center mb-3">
                  <Mail size={32} className="text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p>admin@dietms.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
