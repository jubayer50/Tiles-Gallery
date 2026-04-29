export const tilesData = async () => {
  const res = await fetch(
    "https://tiles-gallery-jubayer-50.vercel.app/titlesData.json",
  );
  const data = await res.json();
  return data;
};
