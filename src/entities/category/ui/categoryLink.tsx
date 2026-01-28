import Link from 'next/link';

interface CategoryLinkProps {
  item: { slug: string; label: string };
}

export const CategoryLink = ({ item }: CategoryLinkProps) => {
  const href = `/?category=${encodeURIComponent(item.slug)}`;

  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
    >
      {item.label}
    </Link>
  );
};
