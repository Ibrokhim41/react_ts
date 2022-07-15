type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? <div>Greeet {props.name}</div> : <div>Login</div>}
    </div>
  );
};

export default Greet;
