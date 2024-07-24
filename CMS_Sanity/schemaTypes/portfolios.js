// Updated Sanity schema for 'resume'
export default {
  name: 'portfolios',
  title: 'Portfolios',
  type: 'document',
  fields: [
      {
          name:'title',
          title:'Title',
          type:'string'
      },
      {
          name:'text',
          title:'Description',
          type:'string'
      },
      {
          name:'hashtag1',
          title:'Hashtag 1',
          type:'string'
      },
      {
        name:'hashtag2',
        title:'Hashtag 2',
        type:'string'
    },
    {
        name:'hashtag3',
        title:'Hashtag 3',
        type:'string'
    },
      {
          name:'image',
          title:'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
      },
  ],
};
