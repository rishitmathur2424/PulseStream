export interface Event {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  time: string;
  description: string;
  videoUrl: string;
  viewers: number;
  isLive: boolean;
  isTrending?: boolean;
  isUpcoming?: boolean;
  host: string;
  hostAvatar: string;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Electric Dreams: Tomorrowland",
    image: "https://images.unsplash.com/photo-1763630054706-d6d8e52b71ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzc1NjQ4MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Music",
    date: "April 10, 2026",
    time: "8:00 PM EST",
    description: "Experience the future of electronic music with world-renowned DJs and cutting-edge visual effects. This immersive concert features state-of-the-art production, holographic displays, and an unforgettable soundscape that pushes the boundaries of live performance.",
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    viewers: 45230,
    isLive: true,
    isTrending: true,
    host: "DJ Armin",
    hostAvatar: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop"
  },
  {
    id: "2",
    title: "Valorant Grand Finals",
    image: "https://images.unsplash.com/photo-1767455471543-055dbc6c6700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBlc3BvcnRzJTIwdG91cm5hbWVudCUyMGFyZW5hfGVufDF8fHx8MTc3NTY0ODE3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Gaming",
    date: "April 12, 2026",
    time: "2:00 PM EST",
    description: "Watch the world's best teams compete for the championship title in the most anticipated esports tournament of the year. With a $5 million prize pool and elite players from across the globe, this is gaming at its finest.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    viewers: 89450,
    isLive: true,
    isTrending: true,
    host: "RiotGames",
    hostAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
  },
  {
    id: "3",
    title: "Lakers vs Warriors Finals",
    image: "https://images.unsplash.com/photo-1762860799648-0a957a2e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwc3BvcnRzJTIwZ2FtZSUyMGFjdGlvbnxlbnwxfHx8fDE3NzU2NDgxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sports",
    date: "April 15, 2026",
    time: "7:30 PM EST",
    description: "The biggest stars in basketball come together for an electrifying showcase of talent, skill, and showmanship. From jaw-dropping dunks to incredible three-pointers, this is must-watch entertainment for sports fans worldwide.",
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    viewers: 120500,
    isLive: false,
    isUpcoming: true,
    host: "NBA Official",
    hostAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    id: "4",
    title: "Apple Vision Pro 2 Reveal",
    image: "https://images.unsplash.com/photo-1773828746476-7ca780cdcb82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzU2MTg3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Tech",
    date: "April 18, 2026",
    time: "10:00 AM EST",
    description: "Join industry leaders and innovators as they unveil groundbreaking technologies that will shape our future. From AI breakthroughs to sustainable tech solutions, discover what's next in the world of innovation.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    viewers: 32100,
    isLive: true,
    isTrending: true,
    host: "Apple Inc",
    hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: "5",
    title: "Metallica World Tour Opening",
    image: "https://images.unsplash.com/photo-1554140732-3210fc8cdf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGxpdmUlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NzU1NzM1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Music",
    date: "April 20, 2026",
    time: "6:00 PM EST",
    description: "Raw energy meets legendary performances in this epic rock festival featuring classic anthems and modern hits. Multiple stages, powerful performances, and an atmosphere that celebrates the timeless spirit of rock and roll.",
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    viewers: 56780,
    isLive: false,
    isUpcoming: true,
    host: "Metallica Official",
    hostAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    id: "6",
    title: "Blue Note Jazz Festival",
    image: "https://images.unsplash.com/flagged/photo-1570050413322-0c1036224f01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWMlMjBmZXN0aXZhbCUyMG5pZ2h0fGVufDF8fHx8MTc3NTY0ODE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Music",
    date: "April 22, 2026",
    time: "9:00 PM EST",
    description: "An intimate evening of smooth jazz featuring world-class musicians in an unforgettable atmosphere. Let the soulful melodies and improvisational brilliance transport you to a world of sophisticated sound.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    viewers: 18900,
    isLive: true,
    host: "Blue Note NYC",
    hostAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
  },
  {
    id: "7",
    title: "UEFA Champions League Final",
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBjcm93ZHxlbnwxfHx8fDE3NzU2NDgxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sports",
    date: "April 25, 2026",
    time: "3:00 PM EST",
    description: "The culmination of Europe's premier football competition brings together the continent's finest teams in a battle for glory. Witness history in the making as legends are born and dreams are realized on the world's biggest stage.",
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    viewers: 250000,
    isLive: false,
    isTrending: true,
    isUpcoming: true,
    host: "UEFA Official",
    hostAvatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop"
  },
  {
    id: "8",
    title: "Y Combinator Demo Day",
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2glMjBwcmVzZW50YXRpb24lMjBidXNpbmVzcyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzc1NjYzNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Business",
    date: "April 28, 2026",
    time: "11:00 AM EST",
    description: "Ambitious entrepreneurs present their revolutionary ideas to top investors in this high-stakes competition. Watch as innovative startups compete for funding and the opportunity to bring their visions to life.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    viewers: 12400,
    isLive: true,
    host: "Y Combinator",
    hostAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
  },
  {
    id: "9",
    title: "Kevin Hart Reality Check Tour",
    image: "https://images.unsplash.com/photo-1576544403918-c47d52572a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBzaG93JTIwdGhlYXRlciUyMHN0YWdlfGVufDF8fHx8MTc3NTY0ODE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Entertainment",
    date: "April 30, 2026",
    time: "8:30 PM EST",
    description: "Get ready for an evening of non-stop laughter with top comedians delivering their best material. From observational humor to hilarious stories, this show guarantees side-splitting entertainment for all.",
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    viewers: 28600,
    isLive: false,
    isUpcoming: true,
    host: "Kevin Hart",
    hostAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
  },
  {
    id: "10",
    title: "UFC Championship Showdown",
    image: "https://images.unsplash.com/photo-1575747515871-2e323827539e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBtYXRjaCUyMHJpbmclMjBmaWdodHxlbnwxfHx8fDE3NzU2NDgxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sports",
    date: "May 2, 2026",
    time: "10:00 PM EST",
    description: "Elite fighters step into the ring for an explosive night of championship bouts. Experience the intensity, skill, and determination as warriors compete for ultimate supremacy in one of the most demanding sports on the planet.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    viewers: 94200,
    isLive: true,
    isTrending: true,
    host: "UFC Official",
    hostAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop"
  },
  {
    id: "11",
    title: "Drake For All The Dogs Tour",
    image: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBjb25jZXJ0JTIwY3Jvd2R8ZW58MXx8fHwxNzc1NjQ4MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Music",
    date: "May 5, 2026",
    time: "7:00 PM EST",
    description: "The biggest names in hip hop unite for a cultural celebration featuring powerful lyrics, incredible beats, and unforgettable performances. This is more than a concert—it's a movement celebrating the art form that changed music forever.",
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    viewers: 67800,
    isLive: false,
    isUpcoming: true,
    isTrending: true,
    host: "OVO Sound",
    hostAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
  },
  {
    id: "12",
    title: "Wimbledon 2026 Men's Final",
    image: "https://images.unsplash.com/photo-1758040252389-47b48246fecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBtYXRjaCUyMGNvdXJ0JTIwcGxheWVyfGVufDF8fHx8MTc3NTY0ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sports",
    date: "May 8, 2026",
    time: "1:00 PM EST",
    description: "Watch tennis greatness unfold as the world's top-ranked players battle for one of the sport's most prestigious titles. Every serve, every rally, and every match point could define a legacy in this elite competition.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    viewers: 45900,
    isLive: true,
    host: "Wimbledon",
    hostAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    id: "13",
    title: "Frieze Art Fair Digital Expo",
    image: "https://images.unsplash.com/photo-1769320442707-ef8633a99ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBmYWlyJTIwZXhoaWJpdGlvbiUyMGdhbGxlcnl8ZW58MXx8fHwxNzc1NjYzNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Art",
    date: "May 10, 2026",
    time: "6:00 PM EST",
    description: "Explore groundbreaking contemporary artworks from visionary artists pushing the boundaries of creative expression. This exclusive exhibition premiere features interactive installations, thought-provoking pieces, and artistic innovation at its finest.",
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    viewers: 8700,
    isLive: false,
    isUpcoming: true,
    host: "Frieze Gallery",
    hostAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  },
  {
    id: "14",
    title: "PlayStation VR2 Showcase",
    image: "https://images.unsplash.com/photo-1640823127518-65e1ad563576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGdhbWluZyUyMGhlYWRzZXR8ZW58MXx8fHwxNzc1NjQ4MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Gaming",
    date: "May 12, 2026",
    time: "4:00 PM EST",
    description: "Step into the future of gaming with cutting-edge VR titles and immersive experiences that blur the line between reality and virtual worlds. Discover next-generation gameplay, revolutionary mechanics, and the evolution of interactive entertainment.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    viewers: 52300,
    isLive: true,
    isTrending: true,
    host: "PlayStation",
    hostAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
  {
    id: "15",
    title: "Paris Fashion Week Chanel",
    image: "https://images.unsplash.com/photo-1700936655679-83f4b37d7d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwc2hvdyUyMHZlbnVlJTIwbGlnaHRzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NTY2NDM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Fashion",
    date: "May 15, 2026",
    time: "2:00 PM EST",
    description: "Witness haute couture at its most spectacular as the world's leading fashion houses present their latest collections on the iconic Parisian runway. From elegant designs to bold statements, experience fashion that defines the future of style.",
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    viewers: 38400,
    isLive: false,
    isUpcoming: true,
    host: "Chanel",
    hostAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  }
];

export const categories = [
  "All Events",
  "Trending",
  "Upcoming",
  "Music",
  "Gaming",
  "Sports",
  "Tech",
  "Business",
  "Entertainment",
  "Art",
  "Fashion"
];