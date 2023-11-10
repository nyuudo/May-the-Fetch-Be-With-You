type ExampleProps = {
  name?: string;
};

const Example = ({ name }: ExampleProps) => {
  return <div>Hello {name}</div>;
};

export default Example;
