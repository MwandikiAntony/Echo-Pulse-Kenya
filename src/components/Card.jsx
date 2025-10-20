import { motion } from "framer-motion";

const Card = ({ title, description, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="relative w-full max-w-sm mx-auto p-6 rounded-2xl shadow-lg 
               bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border 
               border-gray-200 dark:border-gray-700 hover:shadow-green-200/50 
               dark:hover:shadow-green-700/20 transition-all duration-300"
  >
    {/* Decorative accent bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-green-500 rounded-t-2xl"></div>

    {/* Card Content */}
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 tracking-tight">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {description}
    </p>

    {children && <div className="mt-4">{children}</div>}
  </motion.div>
);

export default Card;
