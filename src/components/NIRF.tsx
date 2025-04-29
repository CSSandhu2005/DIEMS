import { motion } from "framer-motion";

const nirfYears = [
  {
    year: "2025",
    highlights: ["Engineering", "Management", "Overall"],
  },
  {
    year: "2024",
    highlights: ["Engineering", "Management", "Overall"],
  },
  {
    year: "2023",
    highlights: ["Engineering", "Management", "Overall"],
  },
  {
    year: "2022",
    highlights: ["Engineering", "Management", "Overall"],
  },
];

const NIRFPage = () => {
  return (
    <div className="bg-gradient-to-b from-sky-900 to-indigo-950 text-white min-h-screen px-4 py-16 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">NIRF Rankings</h1>
        <div className="relative border-l-4 border-yellow-400 ml-8">
          {nirfYears.map((item, index) => (
            <motion.div
              key={index}
              className="pl-8 relative mb-12"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[.75rem] top-2 w-5 h-5 rounded-full bg-yellow-400"></div>
              <h2 className="text-2xl font-bold mb-2">Year {item.year}</h2>
              <ul className="list-disc pl-6 text-gray-100 space-y-1">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight} Rankings</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NIRFPage;
