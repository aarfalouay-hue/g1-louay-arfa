const stories = [
  {
    objectID: 1,
    title: "React 19 New Features",
    url: "https://react.dev",
    author: "Dan Abramov",
    points: 120,
    num_comments: 45
  },
  {
    objectID: 2,
    title: "JavaScript Performance Tips",
    url: "https://developer.mozilla.org",
    author: "MDN Team",
    points: 95,
    num_comments: 30
  }
];

// App component
const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
};

// Header component
const Header = () => {
  return (
    <header>
      <h1>Hacker News Clone</h1>
    </header>
  );
};

// Search component (block body + event handler)
const Search = () => {
  const handleChange = (event) => {
    console.log("Typing detected!");
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

// List component (concise arrow function inside map)
const List = () => {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url} target="_blank" rel="noreferrer">
              {story.title}
            </a>
          </h3>

          <p>Author: {story.author}</p>
          <p>Points: {story.points}</p>
          <p>Comments: {story.num_comments}</p>
        </div>
      ))}
    </div>
  );
};

/*
Reflection:

1. When do we use concise body arrow functions?
- When the function only returns a single expression

2. When do we use block body arrow functions?
- When we need multiple lines or logic before returning

3. What does an event object contain?
- Information about the event (target element, value, type, etc.)
*/
export default App;