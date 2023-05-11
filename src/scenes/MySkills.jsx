import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-yellow">EXPERTISE</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Skills I have managed to accrue throughout my career thus far.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-yellow before:z-[-1] before:rounded-t-[20px] before:rounded-b-[20px]"
            >
              <img
                alt="skills"
                className="rounded-t-[20px] rounded-b-[20px] z-10"
                src="assets/financial-consulting-firm.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/financial-consulting-firm.jpg" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Capital Consulting
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I have collaborated with a number of esteemed corporate clientele, including Fortune 50 enterprises, thereby honing my expertise in handling diverse and complex business challenges. Additionally, I am a certified Microsoft Excel professional and have the distinction of being the youngest employee to attain certification as an Oracle Narrative Reporting Implementer.
          </p>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Financial Markets
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          I completed my undergraduate studies at a top 100 business school, earning a Bachelor of Science degree in Finance within a remarkably short span of three years. I previously held a position as a financial educator at a company that recently underwent an IPO on the NASDAQ. In this role, I delivered lectures on a range of topics, including financial modeling, technical analyses, and fundamental analyses, thereby sharpening my communication and instructional abilities.
          </p>
        </motion.div>
        {/* INTERESTS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Real Estate
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 h-32 bg-green absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          As a licensed real estate agent, I have completed 150 hours of extensive training, which has contributed to my ability to successfully close five deals within the first year of being licensed. Moreover, I have demonstrated my leadership and managerial skills by running a real estate investment company with a team of more than 10 employees, thus gaining valuable experience in real estate operations and personnel management.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
