export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'imgproducts',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
     
    ],
  };