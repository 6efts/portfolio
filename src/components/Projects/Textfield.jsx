const Textfield = ({ value, title, technologies }) => {
  return (
    <div className="flex flex-col gap-8 font-Montserrat lg:flex-1 lg:px-12 lg:text-2xl">
      <div className="lg:pt-24 lg:px-12">
        <p className="text-t-color">{value}</p>
      </div>
      <div className="lg:px-12 tracking-wide">
        <p className="text-s-color">{title}</p>
        <p className="text-t-color text-sm">
          <span className="text-s-color lg:text-xl lg:mt-2 lg:inline-block ">
            Technologies
          </span>
          : {technologies}
        </p>
      </div>
    </div>
  );
};

export default Textfield;
