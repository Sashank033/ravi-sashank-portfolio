"use client";

type CalendlyEmbedProps = {
  url: string;
  title?: string;
  className?: string;
};

export default function CalendlyEmbed({
  url,
  title = "Schedule a meeting with Ravi Sashank",
  className = "",
}: CalendlyEmbedProps) {
  const embedUrl = `${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0b1220&text_color=ffffff&primary_color=0ea5e9`;

  return (
    <div className={`overflow-hidden rounded-xl border border-sky-500/15 bg-[#0b1220] ${className}`}>
      <div className="h-[680px] w-full overflow-y-auto bg-[#0b1220] md:h-[520px] lg:h-[440px]">
        <iframe
          src={embedUrl}
          title={title}
          width="100%"
          height="440"
          frameBorder="0"
          scrolling="yes"
          className="block h-full min-h-[680px] w-full border-0 bg-[#0b1220] md:min-h-[520px] lg:min-h-[440px]"
        />
      </div>
      <div className="border-t border-white/[0.06] bg-navy-950/70 p-4 text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost inline-flex px-5 py-2 text-xs"
        >
          Open Calendly
        </a>
      </div>
    </div>
  );
}
