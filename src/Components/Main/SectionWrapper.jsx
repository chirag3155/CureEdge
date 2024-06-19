const SectionWrapper = ({ id, children }) => {
  return (
    <section className="md:pt-12 pt-8" id={id}>
      {children}
    </section>
  );
};

export default SectionWrapper;
