import React from 'react';
import ReactInstaStories from 'react-insta-stories';

function SeeMore() {
  return <div>see more</div>;
}

export function Stories({ setIsStatusClicked }) {
    function onClose() {
    setIsStatusClicked(false);
    }   
  return (
    <ReactInstaStories
      stories={stories}
      defaultInterval={1500}
      onAllStoriesEnd={()=> onClose()} 
      width={330}
      height={630}
    />
  );
}

const stories = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg',
    seeMore: <SeeMore />,
    header: {
        heading: 'Your Story',
        subheading: 'Posted 5h ago',
      profileImage: 'https://i.pinimg.com/originals/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.png'
    }
  },
  {
    url:
      'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: 'Your Story',
      subheading: 'Posted 32m ago',
      profileImage: 'https://i.pinimg.com/originals/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.png'
    }
  },
  {
    url:
      'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: 'Your Story',
      subheading: 'Posted 32m ago',
      profileImage:
        'https://i.pinimg.com/originals/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.png'
    }
  },
  {
    url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
    type: 'video',
    duration: 1000
  },
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    type: 'video',
    seeMore: <SeeMore />
  },
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    type: 'video'
  },
  'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'
];

export default Stories;
