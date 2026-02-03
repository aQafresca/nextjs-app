import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import { Field, FieldLabel, FieldLegend, FieldSet } from '@/shared/ui/field';
import { RadioGroupItem, RadioGroup } from '@/shared/ui/radio-group';

type TOrientation = 'horizontal' | 'vertical';
type TLabel = 'label' | 'legend' | undefined;

interface IFormRadioProps<
  TFieldValues extends FieldValues,
  TValue extends string,
> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: TLabel;
  orientation?: TOrientation;
  title?: string;
  options: Record<TValue, string>;
}

export const FormRadio = <
  TFieldValues extends FieldValues,
  TValue extends string,
>({
  control,
  name,
  label,
  orientation = 'horizontal',
  title,
  options,
}: IFormRadioProps<TFieldValues, TValue>) => {
  const entries = Object.entries(options) as [TValue, string][];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FieldSet className="w-full max-w-xs">
          <FieldLegend variant={label}>{title}</FieldLegend>
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="flex gap-1 mb-5"
          >
            {entries.map(([key, label]) => {
              const id = `radio-${title}-${key}`;
              return (
                <Field key={id} orientation={orientation}>
                  <RadioGroupItem value={key} id={id} />
                  <FieldLabel htmlFor={id} className="font-normal">
                    {label}
                  </FieldLabel>
                </Field>
              );
            })}
          </RadioGroup>
        </FieldSet>
      )}
    />
  );
};
