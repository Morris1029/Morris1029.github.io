import { useState } from 'react';

import ShapeWaves from './ShapeWaves';
import './ShapeWavesLayer.css';

export default function ShapeWavesLayer() {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`story-waves ${failed ? 'is-fallback' : ''}`} aria-hidden="true">
      <div className="story-waves__fallback" />
      {!failed && (
        <ShapeWaves
          shapes="mixed"
          cellSize={10}
          dotSize={0.64}
          color="#8f8a78"
          hoverColor="#fff8eb"
          backgroundColor="#000000"
          speed={0.42}
          scale={0.9}
          contrast={1.32}
          brightness={0.5}
          flow={0}
          fade={0.52}
          interactive={true}
          splashRadius={108}
          splashStrength={1.1}
          glow={0.56}
          intro={true}
          introDuration={1.35}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
