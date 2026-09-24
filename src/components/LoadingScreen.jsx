import { motion, AnimatePresence } from 'framer-motion';
import { Truck } from 'lucide-react';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait slightly after reaching 100%
          return 100;
        }
        return prev + 2;
      });
    }, 40); // 40ms * 50 steps = 2000ms = 2 seconds

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Logo Area */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img src="/logo.png" alt="Vanshikaa Logo" className="h-24 w-auto mx-auto mb-4 object-contain" onError={(e) => e.target.style.display = 'none'} />
          <h1 className="text-2xl font-bold text-primary tracking-wide">
            VANSHIKAA <br />
            <span className="text-lg font-medium text-dark">Shipping and Forwarding</span>
          </h1>
        </motion.div>

        {/* Animation & Progress */}
        <div className="w-full relative mb-6">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: `${progress}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            className="absolute -top-8 left-0 text-primary"
            style={{ transform: "translateX(-50%)" }}
          >
            <Truck size={32} />
          </motion.div>

          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-primary relative"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            >
              {/* Shimmer */}
              <motion.div
                className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </motion.div>
          </div>
          <div className="text-right mt-2 text-sm text-gray-500 font-medium">
            {progress}%
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 font-medium"
        >
          Preparing Your Global Shipping Experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
