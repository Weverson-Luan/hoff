/**
 * IMPORTS
 */
 interface IMageProps {
  width: number;
  height: number;
  uri: string;
}

interface IPhotoProps {
  name: string;
  type: string;
  uri: IMageProps;
}


/**
 * EXPORTS
 */
export { IPhotoProps };