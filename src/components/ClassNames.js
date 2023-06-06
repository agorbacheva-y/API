const classNames = (...args) => {
  return args.filter(Boolean).join('');
};

export default classNames;

// perhaps too advanced for me rn...
// wanted to add class to correct answer when click on button