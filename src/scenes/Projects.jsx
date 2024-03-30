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
          <Project title="Project 1" subtitle="Architecting analytical sandboxes, interactive web forms, and financial statements for executives to evaluate capital requests prior to the merger between Albertsons Companies and Kroger."/>
          <Project title="Project 2" subtitle="Leveraging Oracle EPM Planning to construct a capital lifecycle application that track projects from the capital request ideation stage to the in-service asset management stage."/>
          <Project title="Project 3" subtitle="Authored numerous financial reports encompassing YOY gross and net revenue analysis. Played a pivotal role in categorizing the client's master data and data within their Oracle EPM system."/>

          {/* ROW 2 */}
          <Project title="Project 4" subtitle="Performed ROI analyses of various corporate initiatives using industry benchmarks, survey data, and market sizing of potential industry verticals for a company investor deck, which raised further financing from outside investors."/>
          <Project title="Project 5" subtitle="Collaborated within the client's Insurance division, operating within the Oracle Planning application. Cntributed to the development of their master data hierarchy structure, the creation of calc-script business rules, and the customization of ad-hoc forms to enhance operational efficiency and data analysis capabilities. "/>
          <Project title="Project 6" subtitle="Created schedules for capital expenditures, working capital, and debt instruments to accurately project company growth and future financial performance (2.5% increase in sales) which led to the creation of the company's financial forecast for its annual budget."/>

          {/* ROW 3 */}
          <Project title="Project 7" subtitle="Undertook a pivotal initiative to enhance supply chain operations. This initiative involved a comprehensive overhaul of previous processes, resulting in the implementation of an advanced system. This system now ensures that items within the supply chain are equipped with the capability to generate and store an ECDSA secp256k1 asymmetric keypairs."/>
          <Project title="Project 8" subtitle="Provided valuable support to a real estate investment company by crafting compelling offers to attract potential clients and conduct comprehensive Comparative Market Analysis assessments for potential investment opportunities."/>
          <Project title="Project 9" subtitle="Utilized Oracle EPM Planning to construct a capita lifecycle application. Heavily involved in the design/ideation phase of the project, as well as served a developer throughout the build phase of the project."/>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
