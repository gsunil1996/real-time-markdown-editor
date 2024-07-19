let markdownData = "";

exports.getMarkdown = (req, res) => {
  const { defaultMarkdown } = req.query;
  if (!markdownData && defaultMarkdown) {
    markdownData = defaultMarkdown;
  }
  res.json({ markdown: markdownData });
};

exports.updateMarkdown = (req, res) => {
  const { markdown } = req.body;
  markdownData = markdown;
  res.json({ markdown: markdownData });
};
