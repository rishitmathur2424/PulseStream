import { useState, useMemo } from "react";
import { Search, Heart, Share2, Bell, User, Radio, Play, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { mockEvents, categories } from "../data/mockEvents";
import { InteractiveEventCard } from "../components/InteractiveEventCard";

// Logo Component - Replace with your actual logo image
import logoImage from "../../assets/logo.png";

const Logo = () => (
  <img src={logoImage} className="w-11 h-11 object-contain" />
);

export function LandingPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [likedEvents, setLikedEvents] = useState<Set<string>>(new Set());

  // Filter events
  const filteredEvents = useMemo(() => {
    let filtered = mockEvents;

    // Filter by category
    if (selectedCategory === "Trending") {
      filtered = filtered.filter((event) => event.isTrending);
    } else if (selectedCategory === "Upcoming") {
      filtered = filtered.filter((event) => event.isUpcoming);
    } else if (selectedCategory !== "All Events") {
      filtered = filtered.filter((event) => event.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query) ||
          event.host.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const toggleLike = (eventId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedEvents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert("Share functionality");
  };

  // Featured event (first live event or first event)
  const featuredEvent = mockEvents.find((e) => e.isLive) || mockEvents[0];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-1">
              <Logo />
              <h1 className="text-2xl font-black text-white">PulseStream</h1>
            </div>

            {/* Centered Nav */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <a href="#" className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                Discover
              </a>
              <a href="#" className="text-sm font-semibold text-gray-400 hover:text-purple-400 transition-colors">
                Live Now
              </a>
              <a href="#" className="text-sm font-semibold text-gray-400 hover:text-purple-400 transition-colors">
                Schedule
              </a>
              <a href="#" className="text-sm font-semibold text-gray-400 hover:text-purple-400 transition-colors">
                Clips
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm transition-colors"
              >
                <Radio className="w-4 h-4" />
                Go Live
              </motion.button>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-lg transition-colors">
                <User className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] mt-[73px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://c.pxhere.com/photos/d0/80/crowd_concert_festival_music_purple-145331.jpg!d"
            alt="Hero"
            className="w-full h-full object-cover object-center" style={{ objectPosition: '30%  35%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f]/80" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Live Event</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight tracking-tight">
              <span className="inline-block" style={{ textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>
                NEON ECLIPSE:{' '}
              </span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 animate-gradient-x" style={{ 
                fontStyle: 'italic',
                letterSpacing: '0.02em'
              }}>
                MIDNIGHT SESSIONS
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Join over 500k viewers for the biggest digital streaming event of the year! Featuring exclusive sets from the world's top DJs.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/event/${featuredEvent.id}`)}
                className="flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-sm transition-colors"
              >
                <Radio className="w-4 sm:w-5 h-4 sm:h-5" />
                Join Stream
              </motion.button>
              <button className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                View Lineup
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-[73px] z-40 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, hosts, or categories..."
                className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
              {["All Events", "Trending", "Upcoming", "Music", "Gaming"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedCategory(filter)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                    selectedCategory === filter
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-[1400px] mx-auto px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event, index) => (
            <InteractiveEventCard
              key={event.id}
              event={event}
              index={index}
              isLiked={likedEvents.has(event.id)}
              onToggleLike={toggleLike}
              onShare={handleShare}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-white mb-2">No events found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </section>
    </div>
  );
}