import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Heart, Share2, Users, Bell, User, Radio, Eye, Calendar, MapPin, DollarSign, MessageSquare, X, Clock, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LiveChat } from "../components/LiveChat";
import { mockEvents } from "../data/mockEvents";
import { useState } from "react";

// Import logo image - Make sure you have logo.png in /src/assets/ folder
import logoImage from "../../assets/logo.png";

const Logo = () => (
  <img src={logoImage} className="w-11 h-11 object-contain" />
);



export function EventPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(true);

  const event = mockEvents.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Event not found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    alert(`Sharing: ${event.title}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Nav */}
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                <Logo />
                <h1 className="text-2xl font-black text-white">PulseStream</h1>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <button onClick={() => navigate("/")} className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                  Discover
                </button>
                <a href="#" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                  Live Now
                </a>
                <a href="#" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                  Schedule
                </a>
                <a href="#" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                  Clips
                </a>
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
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

      {/* Main Content */}
      <div className="pt-[73px] max-w-[1400px] mx-auto px-6 py-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to Events</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Video & Description */}
          <div className={`space-y-6 transition-all duration-300 ${isChatVisible ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10"
            >
              {event.isLive ? (
                // Live Stream - Show iframe video
                <>
                  <iframe
                    src={`${event.videoUrl}?modestbranding=1&rel=0&showinfo=0&fs=1&iv_load_policy=3`}
                    title={event.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Live Indicator Overlay */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {/* Live Badge */}
                    <div className="px-2.5 py-1 bg-red-600 rounded flex items-center gap-1.5 shadow-lg">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Live</span>
                    </div>
                    
                    {/* Viewer Count Badge */}
                    <div className="px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-semibold text-white">{(event.viewers / 1000).toFixed(1)}K</span>
                    </div>
                  </div>
                </>
              ) : (
                // Upcoming Event - Show Event Poster/Trailer
                <>
                  {/* Event Poster Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${event.image})`,
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
                  
                  {/* Upcoming Event Info */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    {/* Upcoming Badge */}
                    <div className="mb-4 px-4 py-2 bg-purple-600/90 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-bold text-white uppercase tracking-wider">Upcoming Event</span>
                    </div>
                    
                    {/* Event Starts In */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="w-6 h-6 text-purple-400" />
                        <span className="text-lg font-bold text-white">Event Starts</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-2xl font-black text-white">{event.date}</span>
                      </div>
                      <span className="text-xl font-bold text-purple-400">{event.time}</span>
                    </div>
                    
                    {/* Watch Trailer Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl font-bold text-white transition-all group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full group-hover:bg-purple-700 transition-colors">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                      <span className="text-lg">Watch Trailer</span>
                    </motion.button>
                    
                    {/* Reminder */}
                    <p className="mt-4 text-sm text-gray-300">
                      Set a reminder to not miss this event
                    </p>
                  </div>
                  
                  {/* Viewer/Follower Count Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-white">{(event.viewers / 1000).toFixed(1)}K followers</span>
                  </div>
                </>
              )}
            </motion.div>

            {/* Event Header Info - Below Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              {/* Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
                  {event.title}
                </h1>
                
                {/* Category Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded text-xs font-bold text-blue-300 uppercase tracking-wider">
                    {event.category}
                  </span>
                  {event.isLive && (
                    <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded text-xs font-bold text-purple-300 uppercase tracking-wider">
                      Live
                    </span>
                  )}
                  <span className="px-3 py-1 bg-gray-600/20 border border-gray-500/30 rounded text-xs font-bold text-gray-300 uppercase tracking-wider">
                    HD
                  </span>
                </div>
              </div>

              {/* Host Info & Stats */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-white">{event.host}</span>
                      {event.isLive && (
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      )}
                    </div>
                    <span className="text-sm text-gray-400">
                      {event.isLive ? `${(event.viewers / 1000).toFixed(1)}K watching now` : `${event.viewers.toLocaleString()} followers`}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-sm transition-colors"
                >
                  Follow
                </motion.button>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm">
                {event.description}
              </p>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Current Game / Type */}
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Event Type
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {event.category === "Gaming" ? "Esports Tournament" :
                     event.category === "Music" ? "Live Concert" :
                     event.category === "Sports" ? "Championship Match" :
                     event.category === "Tech" ? "Product Launch" :
                     `${event.category} Event`}
                  </div>
                </div>

                {/* Schedule */}
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Schedule
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {event.date} • {event.time}
                  </div>
                </div>

                {/* Location / Platform */}
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {event.category === "Gaming" ? "Digital Arena" :
                     event.category === "Music" ? "Virtual Stage" :
                     event.category === "Sports" ? "Live Stadium" :
                     "Online Streaming"}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 justify-between items-center"
            >
              {/* Left Group - Like, Share, Watching */}
              <div className="flex flex-wrap gap-3">
                {/* Like Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
                    isLiked
                      ? "bg-red-600 text-white"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-white" : ""}`} />
                  <span>{isLiked ? "Liked" : "Like"}</span>
                </motion.button>

                {/* Share Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 text-white hover:bg-white/10 font-semibold transition-all border border-white/10"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </motion.button>

                {/* Live Viewers Badge - Purple */}
                {event.isLive && (
                  <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600/20 border border-purple-500/30 overflow-hidden">
                    <Eye className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold text-purple-300">
                      {event.viewers.toLocaleString()} watching
                    </span>
                    <motion.div
                      animate={{ 
                        width: ["0%", "100%"],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"
                    />
                  </div>
                )}
              </div>

              {/* Right Group - Hide/Show Chat Button - Desktop */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsChatVisible(!isChatVisible)}
                className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
                  isChatVisible
                    ? "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    : "bg-purple-600 text-white border border-purple-500/50"
                }`}
              >
                {isChatVisible ? (
                  <>
                    <X className="w-5 h-5" />
                    <span>Hide Chat</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5" />
                    <span>Show Chat</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Right Section - Live Chat with Toggle */}
          <AnimatePresence>
            {isChatVisible && (
              <motion.div
                initial={{ opacity: 0, x: 100, width: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto" }}
                exit={{ opacity: 0, x: 100, width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="hidden lg:block lg:col-span-1"
              >
                <div className="sticky top-24 h-[calc(100vh-8rem)]">
                  <LiveChat />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Chat Toggle Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsChatVisible(!isChatVisible)}
          className="lg:hidden w-full mt-8 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all"
        >
          {isChatVisible ? (
            <>
              <X className="w-5 h-5" />
              <span>Hide Chat</span>
            </>
          ) : (
            <>
              <MessageSquare className="w-5 h-5" />
              <span>Show Chat</span>
            </>
          )}
        </motion.button>

        {/* Mobile Chat - Below video on small screens */}
        <AnimatePresence>
          {isChatVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "600px" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <LiveChat />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
