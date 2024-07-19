import axios from "axios";

const Editor = ({ markdown, setMarkdown }) => {
  const handleChange = async (e) => {
    const newMarkdown = e.target.value;
    setMarkdown(newMarkdown);
    await axios.post('http://localhost:5000/api/markdown', { markdown: newMarkdown });
  };

  return (
    <div className="flex-1 min-h-1/2 sm:min-h-full sm:overflow-hidden overflow-auto border-r border-gray-600">
      <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider">Markdown</div>
      <textarea className="w-full h-full bg-gray-800 outline-none p-6 sm:overflow-auto" value={markdown} onChange={handleChange}></textarea>
    </div>
  );
};

export default Editor;
