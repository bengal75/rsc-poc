const CatImage = ({
  imageId,
  sizeClass = "w-80",
}: {
  imageId: string;
  sizeClass?: string;
}) => {
  return (
    <img
      src={`/${imageId}Jack.jpg`}
      className={`${sizeClass} max-w-full rounded-md border border-purple-700 shadow-lg`}
    />
  );
};

export default CatImage;
