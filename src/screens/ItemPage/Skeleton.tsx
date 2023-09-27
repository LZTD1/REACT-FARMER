import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton: React.FC = (props: any) => (
  <ContentLoader
    speed={2}
    width={1755}
    height={850}
    viewBox="0 0 1755 850"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="100" y="50" rx="10" ry="10" width="600" height="600" />

    <rect x="900" y="65" rx="10" ry="10" width="350" height="30" />
    <rect x="900" y="105" rx="10" ry="10" width="350" height="30" />

    <rect x="900" y="165" rx="10" ry="10" width="130" height="30" />
    <rect x="1050" y="165" rx="10" ry="10" width="130" height="30" />

    <rect x="1050" y="210" rx="10" ry="10" width="100" height="20" />
    <rect x="900" y="210" rx="10" ry="10" width="130" height="20" />

    <rect x="900" y="270" rx="10" ry="10" width="350" height="20" />
    <rect x="900" y="300" rx="10" ry="10" width="350" height="20" />
    <rect x="900" y="330" rx="10" ry="10" width="350" height="20" />
    <rect x="900" y="360" rx="10" ry="10" width="350" height="20" />
    <rect x="900" y="390" rx="10" ry="10" width="350" height="20" />
    <rect x="900" y="420" rx="10" ry="10" width="350" height="20" />
    <rect x="900" y="450" rx="10" ry="10" width="350" height="20" />
    <rect x="900" y="490" rx="10" ry="10" width="350" height="20" />
  </ContentLoader>
);

export default ProductSkeleton;
