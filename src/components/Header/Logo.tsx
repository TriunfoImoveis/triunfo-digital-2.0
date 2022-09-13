import {Image, ImageProps} from '@chakra-ui/react';


export function Logo({src, alt, width, height}: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width} height={height}
    />
  );
}