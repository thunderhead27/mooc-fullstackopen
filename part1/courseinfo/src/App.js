const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    );
  };

  const Content = (props) => {
    const listArr = props.parts.map((i) => (
      <Part key={i.name} name={i.name} exercises={i.exercises} />
    ));
    return <div>{listArr}</div>;
  };

  const Total = (props) => {
    let sum = 0;
    props.parts.forEach((i) => (sum += i.exercises));
    return <p>Number of exercises {sum}</p>;
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
