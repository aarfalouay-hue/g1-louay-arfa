import { useState, useEffect } from "react";

/* ---------------- INITIAL DATA (fallback) ---------------- */
const initialStories = [];

/* ---------------- API ---------------- */
const API_BASE = "https://hn.algolia.com/api/v1/search?query=";

/* ---------------- APP ---------------- */
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(`${API_BASE}react`);

  const [stories, setStories] = useState(initialStories);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(url);
        const data = await response.json();

        setStories(data.hits);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  /* ---------------- HANDLERS ---------------- */
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (!searchTerm) return;
    setUrl(`${API_BASE}${searchTerm}`);
  };

  const handleRemoveStory = (storyId) => {
    const newStories = stories.filter(
      (story) => story.objectID !== storyId
    );
    setStories(newStories);
  };

  /* ---------------- UI ---------------- */
  return (
    <div>
      <Header />

      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <button
        onClick={handleSearchSubmit}
        disabled={!searchTerm}
      >
        Search
      </button>

      {isError && <p>Something went wrong...</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List stories={stories} onRemove={handleRemoveStory} />
      )}
    </div>
  );
}

/* ---------------- HEADER ---------------- */
const Header = () => {
  return (
    <header>
      <h1>Hacker News API App</h1>
    </header>
  );
};

/* ---------------- INPUT ---------------- */
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