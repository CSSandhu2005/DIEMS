const iqacMembers = [
  { srNo: 1, name: "Dr. Subhash. V. Lahane", designation: "Director", position: "Chairman" },
  { srNo: 2, name: "Mr. Shaikh Salim Shaikh Ahmed", designation: "Vice President, MSP-Mandal", position: "Member" },
  { srNo: 3, name: "Mr. K. V. Awargaonkar", designation: "Treasurer, MSP-Mandal", position: "Member" },
  { srNo: 4, name: "Mr. S. B. Kalyankar", designation: "Dean Training & Placement", position: "Member" },
  { srNo: 5, name: "Dr. S. L. Dhondge", designation: "Head-BSH", position: "Member" },
  { srNo: 6, name: "Dr. G. R. Gandhe", designation: "Head -Civil", position: "Member" },
  { srNo: 7, name: "Dr. A. R. Wadhkear", designation: "Head-E&TC", position: "Member" },
  { srNo: 8, name: "Dr. S. C. Nandedkar", designation: "Head-CSE", position: "Member" },
  { srNo: 9, name: "Dr. S. A. Shaikh", designation: "Head-CSE(AIML)", position: "Member" },
  { srNo: 10, name: "Dr. R. G. Rebba", designation: "Head-MBA", position: "Member" },
  { srNo: 11, name: "Dr. R. H. Khan", designation: "Assistant Professor (MBA)", position: "Member" },
  { srNo: 12, name: "Dr. A. S. Pathan", designation: "Assistant Professor (Civil)", position: "Member" },
  { srNo: 13, name: "Mr. C. V. Mane", designation: "Assistant Professor (BSH)", position: "Member" },
  { srNo: 14, name: "Mr. P. R. Rathod", designation: "Assistant Professor (CSE)", position: "Member" },
  { srNo: 15, name: "Mr. K. S. Ingle", designation: "Assistant Professor (E&TC)", position: "Member" },
  { srNo: 16, name: "Miss. R. M. Kale", designation: "Assistant Professor (CSE-AIML)", position: "Member" },
  { srNo: 17, name: "Mr. G. P. Badarkhe", designation: "Assistant Professor (Mechanical)", position: "Member" },
  { srNo: 18, name: "Mr. G. N. Tambe", designation: "Office Superintendent", position: "Member" },
  { srNo: 19, name: "Mr. H. D. Sharma", designation: "Alumni Representative", position: "Member" },
  { srNo: 20, name: "Ms. Ankita Vidhate", designation: "Corporator", position: "Member (Invitee)" },
  { srNo: 21, name: "Mr. S. S. Patil", designation: "Student Representative", position: "Member (Invitee)" },
  { srNo: 22, name: "Mr. Prashant Verma", designation: "M. D. Nandadeep Building Center", position: "Member (Invitee)" },
  { srNo: 23, name: "Mr. Sudhir Surve", designation: "Director, Jyotiba Technologies, Chhatrapati Sambhajinagar", position: "Member (Invitee)" },
  { srNo: 24, name: "Mr. M. U. Pardeshi", designation: "Parent Representative", position: "Member (Invitee)" },
  { srNo: 25, name: "Dr. S. C. Borse", designation: "Head-Mechanical", position: "Coordinator" },
];

const IQACTable = () => {
  return (
    <div className="overflow-x-auto py-10 px-4 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Internal Quality Assurance Cell (IQAC)
      </h2>
      <table className="min-w-full border text-sm">
        <thead>
          <tr className=" text-muted-foreground">
            <th className="border border-gray-300 px-4 py-2">Sr. No</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Designation</th>
            <th className="border border-gray-300 px-4 py-2">Position</th>
          </tr>
        </thead>
        <tbody>
          {iqacMembers.map((member, index) => (
            <tr key={index} className="text-center  text-black">
              <td className="border border-gray-300 px-2 py-1 text-muted-foreground">{member.srNo}</td>
              <td className="border border-gray-300 px-2 py-1 text-muted-foreground">{member.name}</td>
              <td className="border border-gray-300 px-2 py-1 text-muted-foreground">{member.designation}</td>
              <td className={`border border-gray-300 px-2 py-1 text-muted-foreground ${member.position === "Coordinator" ? "font-bold text-blue-600" : ""}`}>
                {member.position}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IQACTable;
