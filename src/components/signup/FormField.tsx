import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FormFieldConfig } from "@/data/signup/formFields";

interface FormFieldProps {
  field: FormFieldConfig;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
// TODO: Change input to field component
// https://ui.shadcn.com/docs/components/radix/field
export default function FormField({
  field,
  value,
  onChange,
  disabled = false,
}: FormFieldProps) {
  const Icon = field.icon;
  const TooltipIcon = field.tooltipIcon;

  return (
    <div className="space-y-2">
      <Label htmlFor={field.id}>{field.label}</Label>
      <InputGroup>
        <InputGroupInput
          type={field.type}
          id={field.id}
          name={field.name}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          className="h-12 text-base"
          required
          disabled={disabled}
        />
        <InputGroupAddon>
          <Icon />
        </InputGroupAddon>
        {TooltipIcon && field.tooltipContent && (
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton className="rounded-full" size="icon-xs">
                  <TooltipIcon />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>
                {field.tooltipContent.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < field.tooltipContent!.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        )}
      </InputGroup>
    </div>
  );
}
