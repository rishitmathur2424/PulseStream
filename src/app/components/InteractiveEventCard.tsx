import { useState } from "react";
import { Heart, Share2, Play, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import type { Event } from "../data/mockEvents";

interface InteractiveEventCardProps {
  event: Event;
  index: number;
  isLiked: boolean;
  onToggleLike: (eventId: string, e: React.MouseEvent) => void;
  onShare: (e: React.MouseEvent) => void;
}

export function InteractiveEventCard({ 
  event, 
  index, 
  isLiked, 
  onToggleLike, 
  onShare 
}: InteractiveEventCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/event/${event.id}`)}
      className="group cursor-pointer bg-[#0d0d12] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300"
    >
      {/* Card Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        {/* Static Image */}
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-black/30 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-purple-500/20"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Live Badge */}
        {event.isLive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.05 + 0.2 }}
            className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full flex items-center gap-2 border border-purple-500/40 shadow-lg shadow-purple-500/30"
          >
            <motion.span 
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Live</span>
          </motion.div>
        )}

        {/* Like & Share Buttons */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <motion.button
            onClick={(e) => onToggleLike(event.id, e)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 flex items-center justify-center bg-black/60 backdrop-blur-md rounded-full hover:bg-black/80 transition-colors border border-white/10"
          >
            <Heart
              className={`w-4 h-4 transition-all ${
                isLiked ? "fill-red-500 text-red-500 scale-110" : "text-white"
              }`}
            />
          </motion.button>
          <motion.button
            onClick={onShare}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 flex items-center justify-center bg-black/60 backdrop-blur-md rounded-full hover:bg-black/80 transition-colors border border-white/10"
          >
            <Share2 className="w-4 h-4 text-white" />
          </motion.button>
        </div>

        {/* Hover Play Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/50"
              >
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Date Badge - Bottom Left */}
        <div className="absolute bottom-4 left-4">
          <div className="px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-xl border border-cyan-500/30 flex items-center gap-2">
            <span className="text-xs font-bold text-cyan-400">{event.date}</span>
            <span className="text-xs font-semibold text-white">• {event.time}</span>
          </div>
        </div>

        {/* Viewer Count - Bottom Right */}
        {event.isLive && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold text-white">
              {event.viewers.toLocaleString()}
            </span>
          </motion.div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        {/* Category Badge */}
        <div>
          <span className="inline-block px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded-full font-bold text-purple-300 uppercase tracking-wide text-[11px]">
            {event.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">
          {event.title}
        </h3>

        {/* Host Info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex-shrink-0 flex items-center justify-center">
            <span className="text-[11px] font-bold text-cyan-400">
              {event.host.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
            </span>
          </div>
          <p className="text-sm font-medium text-gray-400 truncate">{event.host}</p>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/event/${event.id}`);
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-white rounded-2xl font-semibold text-sm transition-all group/btn"
        >
          <span className="group-hover/btn:text-purple-400 transition-colors">
            {event.isLive ? "Watch Stream" : "View Event"}
          </span>
          <motion.span
            className="text-purple-400"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}