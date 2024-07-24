export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'institution',
            title:'Institution',
            type: 'string'
        },
        { 
            name:'feedback',
            title:'Feedback',
            type: 'string'
        },
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imginst',
            title:'ImgInst',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'imgprofile',
            title:'ImgProfile',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
    ]
}