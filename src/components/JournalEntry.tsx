import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, LucideIcon } from "lucide-react";

const MetadataItem = ({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) => (
  <div className="flex items-center gap-2">
    <Icon className="h-3.5 w-3.5" />
    <span className="text-xs tracking-tighter uppercase">{label}</span>
  </div>
);

export function JournalEntry() {
  return (
    <Card className="min-h-[70vh] rounded-xl border-none shadow-sm">
      <CardContent className="px-6 py-4">
        {/* date */}
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-muted-foreground text-sm font-bold tracking-widest uppercase">
            day 1 -
          </h2>
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-[12px] font-bold tracking-widest uppercase"
          >
            march 14, 2024
          </Badge>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-4xl leading-tight font-bold lowercase">
          the quiet of the morning
        </h1>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-foreground/80 text-lg leading-relaxed font-light">
            the morning light filters softly through the blinds, casting long,
            gentle shadows across the wooden floor. there&apos;s a particular
            kind of silence that only exists before the rest of the world wakes
            up—a stillness that feels like a heavy, comfortable blanket.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed font-light">
            i&apos;m sitting here with a warm cup of tea, watching the steam
            curl into the air, feeling completely at peace in my own thoughts.
            today feels different. there&apos;s no rush, no immediate demand for
            my attention. just the hum of the refrigerator and the distant chirp
            of a bird finding its way.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed font-light">
            sometimes, these moments of pure existence are more productive than
            a day full of meetings. i&apos;ve realized that my mind needs this
            &apos;shelter&apos; to process the complexity of life. safety
            isn&apos;t just a place; it&apos;s a state of being where
            you&apos;re not afraid to hear your own pulse.
          </p>

          {/* metadata */}
          <div className="text-muted-foreground flex items-center gap-6 pt-2 opacity-40">
            <MetadataItem icon={Clock} label="06:42 am" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
