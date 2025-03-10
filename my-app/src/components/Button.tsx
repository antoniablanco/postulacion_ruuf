import "../styles/buttons.css";  // ✅ Importamos solo los estilos de los botones

const Button = ({ text }: { text: string }) => {
  return <a className="link-button">{text}</a>;
};

export default Button;
