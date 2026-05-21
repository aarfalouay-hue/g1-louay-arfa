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

function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Hacker News Clone</h1>
    </header>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

function List() {
  return (
    <div>
      {stories.map((story) => {
        return (
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
        );
      })}
    </div>
  );
}

export default App;