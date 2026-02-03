import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { FieldLegend, FieldSet } from '@/shared/ui/field';

interface FormSelectProps<
  TFieldValues extends FieldValues,
  TValue extends string,
> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  placeholder?: string;
  options: Record<TValue, string>;
  defaultValue?: TValue;
}

export const FormSelect = <
  TFieldValues extends FieldValues,
  TValue extends string,
>({
  control,
  name,
  label,
  placeholder,
  options,
  defaultValue,
}: FormSelectProps<TFieldValues, TValue>) => {
  const entries = Object.entries(options) as [TValue, string][];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FieldSet className="w-full max-w-xs">
          <FieldLegend variant="label">{label}</FieldLegend>
          <Select
            value={field.value || defaultValue}
            onValueChange={field.onChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent position={'popper'}>
              {entries.map(([key, value]) => {
                const id = `select-${key}-${value}`;
                return (
                  <SelectItem key={id} value={key} id={id}>
                    {value}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </FieldSet>
      )}
    />
  );
};
