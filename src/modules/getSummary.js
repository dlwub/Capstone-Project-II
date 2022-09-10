const getSummary = (summary) => {
  ['<p>', '</p>', '<b>', '</b>'].forEach((ch) => {
    summary = summary.replace(ch, '');
  });
  return summary;
};

export default getSummary;