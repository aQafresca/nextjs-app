import { useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import type { FieldValues } from 'react-hook-form';
import type { IFormTextInputProps } from '@/shared/model/types/interface';

type InputType = 'text' | 'password' | 'email';

interface FormInputProps<T extends FieldValues> extends Omit<
  IFormTextInputProps<T>,
  'type'
> {
  type?: InputType;
  disabled?: boolean;
}

export function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  disabled,
}: FormInputProps<T>) {
  const isPassword = type === 'password';
  const [visible, setVisible] = useState(false);

  const inputType = isPassword ? (visible ? 'text' : 'password') : type;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>{label}</FormLabel>

          <FormControl>
            <div className="relative">
              <Input
                {...field}
                id={name}
                type={inputType}
                placeholder={placeholder}
                disabled={disabled}
                className={isPassword ? 'pr-10' : undefined}
              />

              {isPassword && (
                <button
                  type="button"
                  aria-label={visible ? 'Hide password' : 'Show password'}
                  className="absolute right-0 top-0 h-full px-3 text-muted-foreground cursor-pointer"
                  onClick={() => setVisible((prev) => !prev)}
                >
                  {visible ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
          </FormControl>
          <div className="min-h-4">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
