import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton: React.FC = (props: any) => (
  <ContentLoader
    speed={2}
    width={290}
    height={450}
    viewBox="0 0 290 450"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="288" height="300" />
    <rect x="5" y="310" rx="0" ry="0" width="83" height="23" />
    <rect x="230" y="310" rx="0" ry="0" width="60" height="23" />
    <rect x="157" y="310" rx="0" ry="0" width="60" height="23" />
    <rect x="5" y="344" rx="0" ry="0" width="200" height="22" />
    <rect x="5" y="377" rx="0" ry="0" width="200" height="22" />
    <rect x="5" y="427" rx="0" ry="0" width="66" height="20" />
    <rect x="213" y="427" rx="0" ry="0" width="66" height="20" />
  </ContentLoader>
);

export default ProductSkeleton;
