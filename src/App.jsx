import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("React");
  const [time, setTime] = useState(10);

  const fetchPost = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .catch((e) => console.log(e.message));

    setPosts(data);
  };

  useEffect(() => {
    console.log("fetching data");
    fetchPost();
  }, []);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="ml-3">
      <h1 className="text-center text-3xl font-bold text-cyan-800">
        useEffect Hooks
      </h1>
      <button
        onClick={() => setName("Vite")}
        className="bg-emerald-300 px-3 py-1 rounded-3xl font-semibold"
      >
        Change Name
      </button>

      <h3 className="text-center text-3xl font-bold text-cyan-800">{time}</h3>

      {posts.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </div>
  );
}

export default App;
