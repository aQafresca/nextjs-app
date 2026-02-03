import { FavoritesList } from '@/entities/favorites/ui/favoritesList';

export const FavoritesPage = () => {
  return (
    <div className={'flex flex-col py-5 gap-3'}>
      <h1>Favorites</h1>
      <FavoritesList />
    </div>
  );
};
