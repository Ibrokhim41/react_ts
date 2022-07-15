type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return <div>
    {props.names.map(name => {
        return (
            <div key={name.first}>
                {name.first}, {name.last}
            </div>
        )
    })}
  </div>;
};

export default PersonList;
