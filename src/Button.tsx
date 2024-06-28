import {ReactNode} from 'react';

const Button = ({ link, children }: { link: string, children: ReactNode }) => {
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