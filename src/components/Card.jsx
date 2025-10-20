const Card = ({ title, description, children }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 w-full max-w-sm mx-auto my-2 transition-colors">
    <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
    {children && <div className="mt-2">{children}</div>}
  </div>
);

export default Card;
