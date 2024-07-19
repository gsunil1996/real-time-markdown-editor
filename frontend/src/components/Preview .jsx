import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang }).value +
          '</code></pre>'
        );
      } catch (error) {
        console.error('Error highlighting:', error);
      }
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    );
  }
});

const Preview = ({ markdown }) => {
  const parsed = md.render(markdown);

  return (
    <div className="flex-1 min-h-1/2 sm:min-h-full overflow-auto">
      <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider">Preview</div>
      <div className="w-full h-full p-6 prose prose-invert" dangerouslySetInnerHTML={{ __html: parsed }} />
    </div>
  );
};

export default Preview;
