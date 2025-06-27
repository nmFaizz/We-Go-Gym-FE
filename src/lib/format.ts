export const formatRupiah = (value: number): string => {
  return new Intl.NumberFormat('id-ID').format(value);
};
