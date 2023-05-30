const navigate = (id, offset=0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop;
      const adjustedPosition = elementPosition - offset;

      window.scrollTo({
        top: adjustedPosition,
        behavior: 'smooth',
      });
    }
  };

  export default navigate;
