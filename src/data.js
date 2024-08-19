import tour1 from './images/tour.avif';
import tour2 from './images/tour.avif';
import tour3 from './images/tour.avif';
import tour4 from './images/tour.avif';

export const pageLinks = [
  {id: 1, href: "#home", text: 'home'},
  {id: 2, href: "#about", text: 'about'},
  {id: 3, href: "#services", text: 'services'},
  {id: 4, href: "#tours", text: 'tours'},
];

export const socialLinks = [
  {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
  {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
  {id: 3, href: 'https://www.twitter.com', icon: 'fab fa-youtube'},
]

export const services = [
    {id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
    {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
    {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
]

export const tours = [
    {
      id: 1,
      image: tour1,
      date: 'august 26th, 2020',
      title: 'tibet adventure',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore, distinctio earum repellat quaerat voluptatibus placeat corporis.',
      location: 'china',
      duration: 6,
      cost: 2100,
    },
    {
        id: 2,
        image: tour2,
        date: 'august 26th, 2020',
        title: 'tibet adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore, distinctio earum repellat quaerat voluptatibus placeat corporis.',
        location: 'china',
        duration: 6,
        cost: 2100,
      },
      {
        id: 3,
        image: tour3,
        date: 'august 26th, 2020',
        title: 'tibet adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore, distinctio earum repellat quaerat voluptatibus placeat corporis.',
        location: 'china',
        duration: 6,
        cost: 2100,
      },
      {
        id: 4,
        image: tour4,
        date: 'august 26th, 2020',
        title: 'tibet adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore, distinctio earum repellat quaerat voluptatibus placeat corporis.',
        location: 'china',
        duration: 6,
        cost: 2100,
      },
]