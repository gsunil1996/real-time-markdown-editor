import axios from "axios";
import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview ";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await axios.get('http://localhost:5000/api/markdown', {
        params: { defaultMarkdown: "# Welcome to the Markdown Editor" }
      });
      setMarkdown(response.data.markdown);
    };

    fetchMarkdown();
  }, []);

  return (
    <main className="w-full h-screen flex flex-col sm:flex-row bg-gray-800 text-white">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </main>
  );
};

export default App;
