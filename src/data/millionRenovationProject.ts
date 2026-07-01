const availablePhotoNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8,
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

const preferredLeadSequence = [37, 8, 7, 6, 5, 4, 3, 39, 38, 36, 35];

const orderedPhotoNumbers = [
  ...preferredLeadSequence,
  ...availablePhotoNumbers.filter((photoNumber) => !preferredLeadSequence.includes(photoNumber)),
];

export const MILLION_RENOVATION_PROJECT = {
  eyebrow: "Another Beau Monde Renovations Project",
  title: "$1 Million Renovation Project",
  value: "$1M",
  scope: "Whole-home renovation",
  photos: orderedPhotoNumbers.map((photoNumber, index) => ({
    number: photoNumber,
    src: `/images/renovations/million-renovation/img-${photoNumber}.jpg`,
    alt:
      photoNumber === 37
        ? "Completed exterior of the Beau Monde Builders million dollar renovation project"
        : `Beau Monde Builders million dollar renovation project photo ${index + 1}`,
  })),
};

export type MillionRenovationProjectPhoto =
  (typeof MILLION_RENOVATION_PROJECT.photos)[number];
