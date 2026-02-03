import { Alert, AlertDescription } from '@/shared/ui/alert';
import { AppError } from '@/shared/lib/errors/form';

interface IFormErrorProps {
  /**
   * Error can be:
   * - root error react-hook-form { message: string }
   * - AppError
   * - undefined/null
   */
  error?: { message?: string } | AppError;
  fallbackMessage?: string;
  className?: string;
}

export const FormError = ({
  error,
  fallbackMessage = 'Unknown error',
  className,
}: IFormErrorProps) => {
  let message = fallbackMessage;

  if (typeof error === 'object' && 'message' in error) {
    message = (error as { message?: string }).message ?? fallbackMessage;
  } else if (error instanceof AppError) {
    message = error.message ?? fallbackMessage;
  }

  return (
    <div className={className}>
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};
