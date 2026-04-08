import { useState } from "react";
import { Heart, Share2, Eye, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import type { Event } from "../data/mockEvents";

interface EventCardProps {
  event: Event;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Simulate share functionality
    alert(`Sharing: ${event.title}`);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleView = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
      onClick={handleView}
    >
      {/* Live Badge */}
      {event.isLive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.05 + 0.3, type: "spring" }}
          className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-red-500/50"
        >
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-xs font-bold text-white uppercase tracking-wide">Live</span>
        </motion.div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video bg-zinc-950">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Viewer Count - Only show when live */}
        {event.isLive && (
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-white">
              {event.viewers.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider">
            {event.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-cyan-400 transition-colors duration-200">
          {event.title}
        </h3>

        {/* Date & Time */}
        <div className="flex items-center gap-4 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-500" />
            <span>{event.time}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          {/* Like Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
              isLiked
                ? "bg-gradient-to-r from-pink-500 to-red-500 border-pink-500 text-white shadow-lg shadow-pink-500/30"
                : "bg-zinc-800/50 border-zinc-700 text-zinc-300 hover:bg-zinc-700/50 hover:border-zinc-600"
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-white" : ""}`} />
            <span className="text-sm font-medium">Like</span>
          </motion.button>

          {/* Share Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700 text-zinc-300 hover:bg-zinc-700/50 hover:border-zinc-600 transition-all duration-200"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share</span>
          </motion.button>

          {/* View Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleView}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm">View</span>
          </motion.button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-2xl" />
      </div>
    </motion.div>
  );
}
