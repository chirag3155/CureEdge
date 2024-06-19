const SectionWrapper = ({ id, children }) => {
  return (
    <section className="md:pt-36 pt-24" id={id}>
      {children}
    </section>
  );
};

export default SectionWrapper;
