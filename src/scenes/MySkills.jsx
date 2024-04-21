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
            Here are some key skills relevant to my line of work that I have managed to accrue 
            throughout my career thus far:
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
                Financial Planning
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          In my capacity as a financial planner, I excel at devising comprehensive financial strategies that align with my clients' objectives. I leverage my expertise to create detailed financial plans, optimizing investment avenues and asset allocation to assist clients achieve their long-term financial goals with precision and foresight.
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
                Financial Analytics
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          As someone with expertise in financial modeling, reporting, dashboarding, I have the ability to construct intricate financial models that simulate various scenarios and predict outcomes. I use my knowledge of financial data and mathematical tools to provide clients with visual representations of their  forecasts that will guide  strategic decision-making, ultimately achieving financial success.
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
                Management Consulting
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 h-32 bg-green absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          My proficiency in management consulting empowers me to work closely with organizations of varying size within numerous industries, identifying areas of improvement, developing effective strategies, and enhancing operational efficiency. I leverage my experience to provide insightful recommendations and support, enabling my clients to overcome challenges and achieve their business objectives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
