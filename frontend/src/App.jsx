import { useEffect } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview ";
import { useDispatch } from 'react-redux';
import { fetchMarkdown } from "./redux/features/markdownSlice";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarkdown());
  }, []);


  return (
    <main className="w-full h-screen flex flex-col sm:flex-row bg-gray-800 text-white">
      <Editor />
      <Preview />
    </main>
  );
};

export default App;
