import { useState } from "react";

function App() {
  console.log("App render");

  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <List stories={filteredStories} />
    </div>
  );
}

const Header = () => {
  console.log("Header render");

  return (
    <header>
      <h1>Hacker News Clone</h1>
    </header>
  );
};

const Search = ({ onSearch }) => {
  console.log("Search render");

  const handleChange = (event) => {
    onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = ({ stories }) => {
  console.log("List render");

  return (
    <div>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </div>
  );
};

const Item = ({ story }) => {
  return (
    <div>
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
};

export default App;