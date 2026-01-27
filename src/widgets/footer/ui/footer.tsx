import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-secondary bg-dark text-gray-400 py-4 min-h-[60px]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0 text-center sm:text-left">
          <p className="text-sm">
            &copy; {currentYear}{' '}
            <Link
              href="https://innowise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-bold hover:underline"
            >
              Innowise
            </Link>
            . All rights reserved.
          </p>

          <Link
            href="https://github.com/aQafresca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground hover:underline mt-2 sm:mt-0"
          >
            Siarhei Buiko
          </Link>
        </div>
      </div>
    </footer>
  );
};
