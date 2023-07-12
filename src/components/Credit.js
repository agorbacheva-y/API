const Credit = ({ image, artistName, url, children }) => {
  return (
    <>
      <p className="credit-link">
        {image} by {artistName} on <a href={url}>{children}</a>
      </p> 
    </>
  );
};

export default Credit;