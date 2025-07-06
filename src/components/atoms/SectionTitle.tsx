type SectionTitleProps = {
  title: string;
  number: number;
};

const SectionTitle = ({ title, number }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-between gap-16 md:gap-24 lg:gap-56">
      <div className="flex flex-col">
        <span className="font-oswald text-foreground text-5xl font-black opacity-5 md:text-6xl">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="font-montserrat text-accent text-3xl font-black whitespace-nowrap md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="font-oswald text-foreground class-text-decor -z-10 text-9xl font-bold whitespace-nowrap uppercase opacity-[4%] md:text-[10rem] dark:opacity-[2%]">
        {title}
      </div>
    </div>
  );
};

export default SectionTitle;
