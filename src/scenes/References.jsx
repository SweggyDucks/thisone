import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const References = () => {
  return (
    <section id="references" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
          MY        
          <span className="text-yellow"> REFERENCES</span>
        </p>
        <LineGradient width="w-2/5" />
        <p className="mt-10">
          Here's what my previous employers and colleagues have to say 
          about my work.
        </p>
      </motion.div>

      {/* REFERENCESS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-gradient-black2 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 rounded-t-[10px] rounded-b-[10px]
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-reference1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Cyrus is a leader...he is always in high spirits and collaborates well with his clients.
          </p>
          <p className="text-center text-xl font-semibold">
            - Thomas R.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-gradient-black2 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 rounded-t-[10px] rounded-b-[10px]
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-reference2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            One of the brightest consultants I have ever had the pleasure of working with.
          </p>
          <p className="text-center text-xl font-semibold">
            - Todd K.; Director @ Alithya
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-gradient-black2 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 rounded-t-[10px] rounded-b-[10px]
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-reference3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            One of the hardest workers I have ever met; he masters new skills quickly, and is always willing to adapt.
          </p>
          <p className="text-center text-xl font-semibold">
            - Ali J.; CEO @ Cyron Inc.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default References;
