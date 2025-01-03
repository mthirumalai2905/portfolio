import React from 'react';
import { MoveDown } from 'lucide-react';

interface RopeProps {
  onPull: () => void;
  isPulled: boolean;
}

const Rope: React.FC<RopeProps> = ({ onPull, isPulled }) => {
  return (
    <div className="fixed top-0 right-12 flex flex-col items-center">
      <div className={`rope-container ${isPulled ? 'pulled' : ''}`}>
        <div className="rope-segment" />
        <div className="rope-segment" />
        <div className="rope-segment" />
        <button
          onClick={onPull}
          className="rope-handle group"
          aria-label="Download Resume"
        >
          <MoveDown className="w-8 h-8 text-amber-900 group-hover:text-amber-700 transition-colors" />
          <span className="handle-text">Pull to download resume</span>
        </button>
      </div>
    </div>
  );
};

export default Rope;
