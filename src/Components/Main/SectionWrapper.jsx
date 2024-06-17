const SectionWrapper = ({ id, children }) => {
  return (
    <section className="pt-12 md:pt-28" id={id}>
      {children}
    </section>
  );
};

export default SectionWrapper;
