import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { jobs } from "@/data/paragraphs";

const Work: React.FC = () => {
  return (
    <Accordion type="multiple" className="w-full">
      {jobs.map(({ date, company, type, info }, idx) => (
        <AccordionItem
          value={`item-${idx}`}
          key={idx}
          className="border-b border-zinc-800"
        >
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-homeVideo text-zinc-100 text-[13px] text-left w-1/3">
              {company}
            </span>
            <span className="font-homeVideo text-zinc-400 text-[11px] w-1/3">
              {date}
            </span>
            <span className="font-homeVideo text-zinc-500 text-[11px] w-1/3 text-right pr-2">
              {type}
            </span>
          </AccordionTrigger>
          <AccordionContent className="font-homeVideo text-zinc-300 text-[11px] leading-relaxed pb-4">
            {info}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Work;
