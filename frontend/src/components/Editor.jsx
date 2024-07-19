import { useDispatch, useSelector } from "react-redux";
import { postMarkdown } from "../redux/features/markdownSlice";

const Editor = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.markdown);

  const handleChange = async (e) => {
    const payload = { markdown: e.target.value };
    dispatch(postMarkdown(payload));
  };

  return (
    <div className="flex-1 min-h-1/2 sm:min-h-full sm:overflow-hidden overflow-auto border-r border-gray-600">
      <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider">
        Markdown
      </div>
      <textarea
        className="w-full h-full bg-gray-800 outline-none p-6 sm:overflow-auto"
        value={data || ""}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Editor;
