
/**
 * REMOVING STRING QUOTES
 * @param tokenTransform 
 * @returns string
 */
export function formatString(tokenTransform: string){
  const formatted = tokenTransform.replace(/'/g, '');
  return formatted;
};