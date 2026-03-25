import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function DownloadCTA() {
  return (
    <section
      id="download"
      className="section-padding bg-[#081C15] text-[#FDFCF9] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="space-y-6 scroll-reveal">
          <h2 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.8]">
            Be Part of the <br />
            <span className="text-[#1B4332]">Future.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-[#FDFCF9]/60 max-w-2xl mx-auto font-medium">
            Download the app and start tracking your crops, reducing waste, and
            connect with Botswana's agricultural community.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 scroll-reveal">
          <Button
            size="lg"
            className="bg-[#1B4332] hover:bg-white hover:text-[#081C15] text-white px-12 py-10 text-2xl rounded-full transition-all duration-500 shadow-2xl"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.agricola.prod",
                "_blank",
              )
            }
          >
            <Play className="w-8 h-8 mr-4 fill-current" />
            Download on Google Play
          </Button>
        </div>

        <p className="text-[#1B4332] font-black tracking-[0.3em] uppercase text-sm scroll-reveal">
          "Temothuo ya rona, Isago ya rona"
        </p>
      </div>
    </section>
  );
}
