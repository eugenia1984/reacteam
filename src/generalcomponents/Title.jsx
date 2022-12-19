function Title({ text }) {
  const titleClass = "my-5 text-center text-uppercase ";

  return (
    <h1 
      className={ titleClass }> 
      { text } 
    </h1>
  )
};

export default Title;