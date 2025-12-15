import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40 text-white">
      <div className="mx-auto">
        <div className="flex flex-col text-center bg-teal-950 p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Let’s Build Something That Works for Your Business
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-white foreground max-w-xl">
            Ready to start your project? Let’s turn your ideas into a powerful digital presence.
            </p>
          </div>
          <div className="flex flex-row gap-4">
          <a href="/contact-us">
  <Button className="gap-4 bg-[#b99b6d]">
    Contact Us <MoveRight className="w-4 h-4" />
  </Button>
</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
