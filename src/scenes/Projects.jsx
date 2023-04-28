import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          A collective gallery of past projects I was presented
          the opportunity to work on.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project title="Project 1" subtitle="Assisted their corporate division design a capital portfolio planning solution to execute throughout the entire company. Designed data integrations, financial models, and financial reports."/>
          <Project title="Project 2" subtitle="Assisted with a capital portfolio planning solution to be used throughout their company. Solution was geared towards supporting multi-year forecasting, as well as calculating and storing ETC and EAT."/>
          <Project title="Project 3" subtitle="Drafted several reports and helped classify the client's master data and data within their Oracle application. Drafted financial reports contain YOY gross and net revenue."/>

          {/* ROW 2 */}
          <Project title="Project 4" subtitle="Served as an interim CFO while simultaneosly obtaining my B.S. in Finance. Led pitch deck presentations, obtain venture capital funding, and managed a team of over 30 employees. Efforts resulted in 6-figure net revenue."/>
          <Project title="Project 5" subtitle="Worked within the client's Insurance division within the Oracle Planning application. Asisted with the development of their master data hierarchy structure, calc-script business rules, and ad-hoc forms. "/>
          <Project title="Project 6" subtitle="Conducted individual company reports with comparable company analyses for clients. Drafted market research reports and industry analyses, used to formulate company investment decisions. Efforts resulted in a public listing on the NASDAQ."/>

          {/* ROW 3 */}
          <Project title="Project 7" subtitle="Worked with the $200 million, VC backed Web3 giant, Proof Inc. Developed a cryptographic code to be stored inside of NFC chips, providing immute verification of physical objects via the blockchain."/>
          <Project title="Project 8" subtitle="Utilized my recently obtained real estate license to assist a real estate investment company obtain deals via writing offers to customers, negotiating on behalf of my clients, and performing CMA analyses on potential investments."/>
          <Project title="Project 9" subtitle="Assisted with the development of their website as a lead developer. Served as a product manager, spearheading any graphic design and videography required to further display products."/>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
