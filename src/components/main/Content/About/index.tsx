import { about } from "@/data/paragraphs";

const About: () => JSX.Element = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {about.map(({ personal, carreer, honorableMentions }, id) => (
        <div className="flex flex-col gap-6" key={id}>
          <div className="border-l-2 border-zinc-600 pl-4">
            <h2 className="font-homeVideo text-zinc-100 text-[13px] tracking-widest uppercase mb-2">
              {personal.title}
            </h2>
            <p className="font-homeVideo text-zinc-300 text-[11px] leading-relaxed">
              {personal.text}
            </p>
          </div>
          <div className="border-l-2 border-zinc-600 pl-4">
            <h2 className="font-homeVideo text-zinc-100 text-[13px] tracking-widest uppercase mb-2">
              {carreer.title}
            </h2>
            <p className="font-homeVideo text-zinc-300 text-[11px] leading-relaxed">
              {carreer.text}
            </p>
          </div>
          <div>
            <p className="font-homeVideo text-zinc-500 text-[11px] mb-4">
              {honorableMentions.text}
            </p>
            <div className="flex flex-row flex-wrap gap-6">
              {honorableMentions.list.map(({ link, icon, text }, id) => (
                <a href={link} target="_blank" key={id}>
                  <img
                    src={icon}
                    className="h-8 grayscale opacity-50 hover:opacity-90 transition-opacity"
                    alt={text}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
