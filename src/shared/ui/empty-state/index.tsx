interface IEmptyState {
  message: string;
}

export const EmptyState = ({ message }: IEmptyState) => {
  return (
    <div
      className={
        'flex flex-col items-center justify-center text-center p-8 w-full min-h-[400px] flex-1'
      }
    >
      <h4>{message}</h4>
    </div>
  );
};
