const Button = ({ link, children }) => {
  return (
    <a
      href={link}
      className="Button"
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default Button