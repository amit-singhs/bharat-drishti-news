export type Article = {
  id: string;
  category: string;
  headline: string;
  summary: string;
  imageUrl: string;
  imageHint: string;
  author: string;
  authorImage?: string;
  date: string;
};

export const dummyArticles: Article[] = [
  {
    id: "1",
    category: "Politics",
    headline: "White House has no plan to mandate IVF care, despite campaign pledge",
    summary:
      "Last year, Donald Trump said that if he returned to office, the government would issue rules requiring insurance companies to cover treatment for it.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "white house politics",
    author: "By Alice Ollstein and Megan Wilson",
    date: "July 25, 2024",
    authorImage: "https://placehold.co/100x100.png"
  },
  {
    id: "2",
    category: "National",
    headline: "Economic fears of investors are here — and fed by Trump's reaction",
    summary: "A new wave of uncertainty is gripping Wall Street as investors react to the former president's latest economic proposals.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "stock market chart",
    author: "By John Doe",
    date: "July 25, 2024",
  },
  {
    id: "3",
    category: "National",
    headline: "Reeling over alleged child sex ring, Alabama community asks: 'Did no one know?'",
    summary: "At prayer meetings and other gatherings, County residents have grappled with the realization that horrific crimes may have been happening in their town.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "small town community",
    author: "By Emily Baxter",
    date: "July 25, 2024",
  },
   {
    id: "4",
    category: "Politics",
    headline: "The defining moments of a presidential campaign",
    summary:
      "From televised debates to surprise October revelations, a look back at the key events that have shaped presidential races.",
    imageUrl: "https://placehold.co/800x500.png",
    imageHint: "political campaign rally",
    author: "By Presidential Historian",
    date: "July 24, 2024",
  },
  {
    id: "5",
    category: "Opinions",
    headline: "America is becoming a nation of homebodies",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "person on couch",
    author: "Dana Milbank",
    authorImage: "https://placehold.co/40x40.png",
    date: "July 24, 2024",
  },
  {
    id: "6",
    category: "Opinions",
    headline: "Putting maximum pressure on Russia requires secondary sanctions on oil",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "oil rig",
    author: "The Editorial Board",
    authorImage: "https://placehold.co/40x40.png",
    date: "July 24, 2024",
  },
  {
    id: "7",
    category: "Opinions",
    headline: "Firing the statistician won't change the job numbers",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "woman thinking",
    author: "Megan McArdle",
    authorImage: "https://placehold.co/40x40.png",
    date: "July 23, 2024",
  },
    {
    id: "8",
    category: "Opinions",
    headline: "845,000 dead on U.S. highways. Why not address the main cause?",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "highway traffic",
    author: "Josh Max",
    authorImage: "https://placehold.co/40x40.png",
    date: "July 23, 2024",
  },
    {
    id: "9",
    category: "Opinions",
    headline: "The road map to making America a crypto superpower",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "cryptocurrency coins",
    author: "Scott Bessent",
    authorImage: "https://placehold.co/40x40.png",
    date: "July 22, 2024",
  },
  {
    id: "10",
    category: "Opinions",
    headline: "Please disperse, 'Naked Gun' reboot. There's nothing to see here.",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "vintage camera",
    author: "Will Leitch",
    authorImage: "https://placehold.co/40x40.png",
    date: "July 22, 2024",
  },
  {
    id: '11',
    category: 'Business',
    headline: 'How office culture is changing for a new generation of workers',
    summary: 'From hybrid work to flexible hours, companies are adapting to new employee expectations.',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'modern office interior',
    author: 'By Sarah Chen',
    date: 'July 21, 2024',
    authorImage: 'https://placehold.co/100x100.png'
  },
  {
    id: '12',
    category: 'Tech',
    headline: 'The AI revolution in healthcare is already here',
    summary: 'Artificial intelligence is transforming diagnostics, drug discovery, and patient care.',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'doctor using tablet',
    author: 'By David Lee',
    date: 'July 20, 2024',
    authorImage: 'https://placehold.co/100x100.png'
  },
  {
    id: '13',
    category: 'Climate',
    headline: 'Cities are turning to green roofs to combat urban heat islands',
    summary: 'Rooftop gardens and vegetation are helping to cool cities and manage stormwater.',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'city with green roofs',
    author: 'By Maria Garcia',
    date: 'July 19, 2024',
    authorImage: 'https://placehold.co/100x100.png'
  },
  {
    id: '14',
    category: 'Well-Being',
    headline: 'The science behind the benefits of a 20-minute walk',
    summary: 'Even short bursts of activity can have significant positive effects on physical and mental health.',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'person walking in park',
    author: 'By Dr. Emily Carter',
    date: 'July 18, 2024',
    authorImage: 'https://placehold.co/100x100.png'
  }
];
