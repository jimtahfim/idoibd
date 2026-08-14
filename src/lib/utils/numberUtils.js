/**
 * Converts English numbers/digits into Bangla digits (০-৯).
 * Also formats numbers with comma separators in Bengali style if needed.
 * 
 * @param {number|string} num 
 * @returns {string}
 */
export const toBanglaNumber = (num) => {
  if (num === null || num === undefined) return '';
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num
    .toString()
    .replace(/[0-9]/g, (digit) => banglaDigits[parseInt(digit, 10)]);
};

/**
 * Formats course fee to Bangla currency string.
 * 
 * @param {number|string} fee 
 * @returns {string}
 */
export const formatCourseFee = (fee) => {
  if (fee === null || fee === undefined || fee === 0 || fee === '0') {
    return 'বিনামূল্যে';
  }
  const numericFee = typeof fee === 'string' ? parseFloat(fee) : fee;
  if (isNaN(numericFee) || numericFee === 0) {
    return 'বিনামূল্যে';
  }
  const formattedWithCommas = numericFee.toLocaleString('bn-BD');
  return `৳ ${formattedWithCommas}`;
};
