const INITIAL_STATE = {
  sections: [
    {
      title: 'accoustic',
      imageUrl: 'https://www.kirstein.de/out/pictures/generated/product/1/900_760_75/57c3e1d11c2d418fe4fbe6edc90f4e94_1.jpg',
      id: 1,
      linkUrl: 'shop/accoustic'
    },
    {
      title: 'electric',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/616iRY5yuZL.jpg',
      id: 2,
      linkUrl: 'shop/electric'
    },
    {
      title: 'ukulele',
      imageUrl: 'https://thumbs.static-thomann.de/thumb/thumb640x/pics/cms/image/guide/en/ukulele/010_ukulele_crop_index.png',
      id:3,
      linkUrl: 'shop/ukulele'
    },
    {
      title: 'bass',
      imageUrl: 'https://thumbs.static-thomann.de/thumb/thumb640x/pics/cms/image/guide/en/bass_guitars/009_ebaesse_crop_index.png',
      id:4,
      linkUrl: 'shop/bass',
      size: 'large'
    },
    {
      title: 'banjos',
      imageUrl: 'https://www.kirstein.de/out/pictures/generated/product/1/900_760_75/059d9457e155f9a4089fd44454928838_1.jpg',
      id:5,
      linkUrl: 'shop/banjos',
      size: 'large'
    }
  ]
};


const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;



