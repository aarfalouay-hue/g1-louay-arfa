import { useState, useEffect } from "react";

/* ---------------- INITIAL DATA ---------------- */
const initialStories = [
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

/* ---------------- APP ---------------- */
function App() {
  console.log("App render");

  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem("search") || "";
  });

  const [stories, setStories] = useState(initialStories);

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveStory = (storyId) => {
    const newStories = stories.filter(
      (story) => story.objectID !== storyId
    );
    setStories(newStories);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />

      <InputWithLabel id="search" value={searchTerm} onInputChange={handleSearch}>
        <strong>Search:</strong>
      </InputWithLabel>

      <List stories={filteredStories} onRemove={handleRemoveStory} />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
const Header = () => {
  return (
    <header>
      <h1>Hacker News Clone</h1>
    </header>
  );
};

/* ---------------- REUSABLE INPUT COMPONENT ---------------- */
const InputWithLabel = ({ id, value, onInputChange, children }) => {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

/* ---------------- LIST ---------------- */
const List = ({ stories, onRemove }) => {
  return (
    <div>
      {stories.map((story) => (
        <Item
          key={story.objectID}
          story={story}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

/* ---------------- ITEM ---------------- */
const Item = ({ story, onRemove }) => {
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

      <button onClick={() => onRemove(story.objectID)}>
        Dismiss
      </button>
    </div>
  );
};

export default App;