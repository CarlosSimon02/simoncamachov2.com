const Background = () => {
  return (
    <div className="fixed inset-0 -z-9999">
      <div className="from-background to-background-2 h-full w-full bg-gradient-to-b"></div>
      <div className="background-triangle from-background to-background-2 absolute top-0 left-0 aspect-[600/400] w-xl bg-gradient-to-b md:w-[50vw]"></div>
    </div>
  );
};

export default Background;
