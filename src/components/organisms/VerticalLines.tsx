const VerticalLines = () => {
  return (
    <div className="flex h-full gap-[50rem]">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="bg-foreground-2 h-full w-[0.0625rem] opacity-10"
        />
      ))}
    </div>
  );
};

export default VerticalLines;
