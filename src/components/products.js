import React from 'react';

const Products = (props) => {
  return React.createElement(
    'section',
    { id: 'products', className: 'products' },
    React.createElement('h2', null, 'Our Products'),
    React.createElement('div', { className: 'category-grid' },
      React.createElement('div', { className: 'category-item', onClick: () => props.handleSectionClick('oils') },
        React.createElement('img', { src: 'https://img.mensxp.com/media/content/2020/Sep/pouring-cold-pressed-olive-oil-in-a-glass-bowl_5f6213be67461.jpeg', alt: 'Cold-Pressed Oils' }),
        React.createElement('h3', null, 'Cold-Pressed Oils'),
        React.createElement('p', null, 'Explore our range of healthy cold-pressed oils.')
      ),
      React.createElement('div', { className: 'category-item', onClick: () => props.handleSectionClick('spices') },
        React.createElement('img', { src: 'https://th.bing.com/th?id=OIP.gQSyyHUeMzAf6f_vgUSPDAHaEi&w=319&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2', alt: 'Spices & Masala' }),
        React.createElement('h3', null, 'Spices & Masala'),
        React.createElement('p', null, 'Explore our selection of fresh spices and masalas.')
      ),
      React.createElement('div', { className: 'category-item', onClick: () => props.handleSectionClick('instant-mix') },
        React.createElement('img', { src: 'https://th.bing.com/th/id/OIP.lf04Qj_C1KCCyc8xgzMKLQHaLH?pid=ImgDet&w=192&h=288&c=7&dpr=1.4', alt: 'Instant Mix' }),
        React.createElement('h3', null, 'Instant Mix'),
        React.createElement('p', null, 'Explore our selection of instant mixes for quick meals.')
      ),
      React.createElement('div', { className: 'category-item', onClick: () => props.handleSectionClick('groceries') },
        React.createElement('img', { src: 'https://www.byrdie.com/thmb/ObgVFeTPIDMDvIikiaAOAsEGb3Y=/1762x1136/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txpe92075c44Tf200_Medium_741253-c848eec970cb4559bea8d6854d0c5539.jpg', alt: 'Other Groceries' }),
        React.createElement('h3', null, 'Other Groceries'),
        React.createElement('p', null, 'Explore our other grocery products including grains, flours, etc.')
      ),
      React.createElement('div', { className: 'category-item', onClick: () => props.handleSectionClick('haircare') },
        React.createElement('img', { src: 'https://th.bing.com/th/id/OIP.QwQ2ggz8lTVYFWN9I3PVgwHaEh?pid=ImgDet&w=192&h=117&c=7&dpr=1.4', alt: 'Hair & Skin Care' }),
        React.createElement('h3', null, 'Hair & Skin Care'),
        React.createElement('p', null, 'Explore our natural products for hair and skin care.')
      )
    )
  );
};

export default Products;
