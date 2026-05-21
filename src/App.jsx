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
]
function App() {
  return (
    
    <div>
      {stories.map((story) => {
        return (
          /*title as a link to the story's URL*/
        <div key={story.objectID}>
  <h3>
    <a href={story.url} target="_blank" rel="noreferrer">
      {story.title}
    </a>
  </h3>

  <p>Author: {story.author}</p>
  <p>Points: {story.points}</p>
  <p>Comments: {story.num_comments}</p>
</div>);
      })}
    </div>
  );
};