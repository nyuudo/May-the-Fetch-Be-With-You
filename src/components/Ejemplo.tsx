type EjemploProps = {
  name?: string;
};

const Ejemplo = ({ name }: EjemploProps) => {
  return <div>Hello {name}</div>;
};

export default Ejemplo;
