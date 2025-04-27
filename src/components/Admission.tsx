import { motion } from 'framer-motion';

const Admission = () => {
  const branches = [
    {
      title: 'Mechanical Engineering',
      code: '211461210',
      intake: '120',
    },
    {
      title: 'Civil Engineering',
      code: '211419110',
      intake: '120',
    },
    {
      title: 'Electronics & Telecommunication Engineering',
      code: '211437010',
      intake: '120',
    },
    {
      title: 'Computer Science & Engineering',
      code: '211491110',
      intake: '120',
    },
    {
      title: 'Computer Science & Engineering (AIML)',
      code: '211424210',
      intake: '60',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const CollegeInfo = ({ collegeCode, affiliation }: { collegeCode: string, affiliation: string }) => (
    <motion.div {...fadeInUp} className="bg-card p-6 rounded-2xl border">
      <h3 className="text-white text-lg font-semibold mb-3">College Code</h3>
      <p className="text-muted-foreground mb-4">{collegeCode}</p>
      <p className="text-muted-foreground text-sm">{affiliation}</p>
      <p className="text-muted-foreground text-sm mt-4">
        Address: Deogiri Institute of Engineering and Management Studies, Railway Station Road, Chhatrapati Sambhajinagar – 431005.
      </p>
    </motion.div>
  );

  const AdmissionContact = () => (
    <motion.div {...fadeInUp} className="bg-card p-6 rounded-2xl border">
      <h3 className="text-white text-lg font-semibold mb-3">For Admissions Contact</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Dr. Subhash Lahane <br />
        Director, DIEMS <br /><br />
        Phone: 0240-2367567 <br />
        Email: <span className="underline">director@dietms.org</span>
      </p>
    </motion.div>
  );

  const SectionHeading = ({ title }: { title: string }) => (
    <motion.h2
      className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {title}
    </motion.h2>
  );

  const SectionSubheading = ({ text }: { text: string }) => (
    <motion.p
      className="text-muted-foreground text-lg md:text-xl mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.p>
  );

  return (
    <section className="py-10 md:py-16 bg-background">
      {/* First Year Admissions */}
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-screen-lg mx-auto">
          <SectionHeading title="Admissions B.Tech. - First Year Engineering" />
          <SectionSubheading text="Deogiri Institute of Engineering & Management Studies" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                className="border border-muted rounded-2xl p-6 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-white text-lg font-semibold mb-4">{branch.title}</p>
                <p className="text-muted-foreground text-base">
                  DTE Code: {branch.code} <br />
                  Intake: <span className="text-primary font-semibold">{branch.intake}</span>
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <CollegeInfo
              collegeCode="EN2114"
              affiliation="Affiliated with Dr. Babasaheb Ambedkar Technological University, Lonere."
            />
            <AdmissionContact />
            <motion.div {...fadeInUp} className="bg-card p-6 rounded-2xl border">
              <h3 className="text-white text-lg font-semibold mb-3">
                First Year Admission Incharge
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dr. S. L. Dhondge <br />
                Head, Basic Science & Humanities, DIEMS <br /><br />
                Phone: 0240-2367555 / 0240-2367575 <br />
                Mobile: +91-9049009390 <br />
                Email: <span className="underline">hodbsh@dietms.org</span>
              </p>
            </motion.div>
          </div>
        </div>  
      </div>

      {/* Direct Second Year Admissions */}
      <div className="container mx-auto px-4 text-center mt-20">
        <div className="max-w-screen-lg mx-auto">
          <SectionHeading title="Admissions B.Tech. - Direct Second Year Engineering" />
          <SectionSubheading text="Deogiri Institute of Engineering & Management Studies" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                className="border border-muted rounded-2xl p-6 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-white text-lg font-semibold mb-4">{branch.title}</p>
                <p className="text-muted-foreground text-base">
                  DTE Code: {branch.code} <br />
                  Intake: <span className="text-primary font-semibold">{branch.intake}</span>
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <CollegeInfo
              collegeCode="EN2114"
              affiliation="Affiliated with Dr. Babasaheb Ambedkar Technological University, Lonere."
            />
            <AdmissionContact />
            <motion.div {...fadeInUp} className="bg-card p-6 rounded-2xl border">
              <h3 className="text-white text-lg font-semibold mb-3">
                Direct Second Year Admission Incharge
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dr. Durgesh H. Tupe <br />
                Assistant Professor, CSE Dept., DIEMS <br /><br />
                Phone: 0240-2367555 <br />
                Mobile: +91-9423730607 <br />
                Email: <span className="underline">durgeshtupe@dietms.org</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MBA Admissions Section */}
      <div className="container mx-auto px-4 text-center mt-20">
        <div className="max-w-screen-lg mx-auto">
          <SectionHeading title="Admissions - Masters in Business Administration (MBA)" />
          <SectionSubheading text="Deogiri Institute of Engineering & Management Studies" />

          <div className="mt-8 grid grid-cols-1 gap-6">
            <motion.div
              className="border border-muted rounded-2xl p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-lg font-semibold mb-4">
                Masters in Business Administration
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Intake Approved for 2024–25: <span className="text-primary font-semibold">180</span><br />
                (Full Time, 2 Years / 4 Semester Degree)<br />
                Established: 2009<br />
                DTE Code: 211410110
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <CollegeInfo
              collegeCode="MB2114"
              affiliation="Affiliated with Dr. Babasaheb Ambedkar Marathwada University, Aurangabad."
            />
            <AdmissionContact />
            <motion.div {...fadeInUp} className="bg-card p-6 rounded-2xl border">
              <h3 className="text-white text-lg font-semibold mb-3">
                Head, MBA Department
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dr. Rupesh Rebba <br />
                Head MBA, DIEMS <br /><br />
                Phone: 0240-2367566 <br />
                Mobile: +91-9579397158 <br />
                Email: <span className="underline">hodmba@dietms.org</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
    </section>

  
  );
};

export default Admission;
