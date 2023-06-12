const LevelButton = ({ children, onClick }) => {
  return (
    <div>
      <button
        type="button"
        className="level-btn"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default LevelButton;