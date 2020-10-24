const BASE_NAME = "generated.photos_v3_";
const USER_NAMES = [
  "John Doe",
  "Alex Speers",
  "Jamison Perkins",
  "Caylee Williams",
  "Sidney Bean",
  "Jonah Hawkins",
  "Omar Bass",
  "Gunner Cline",
  "Darnell Shepard",
];

export const getRandomPhotos = async () => {
  return USER_NAMES.map((name, i) => ({
    name,
    photoName: `${BASE_NAME}${i + 1}`,
  }));
};
