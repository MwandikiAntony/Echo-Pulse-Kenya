const Button = ({ children, onClick, variant = 'primary' }) => {
  const base = 'px-4 py-2 rounded font-semibold transition-all';
  const colors = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  return (
    <button className={`${base} ${colors[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
