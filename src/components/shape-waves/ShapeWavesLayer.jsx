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
          cellSize={12}
          dotSize={0.55}
          color="#746f62"
          hoverColor="#f5efe3"
          backgroundColor="#000000"
          speed={0.35}
          scale={0.8}
          contrast={1.1}
          brightness={0.28}
          flow={0}
          fade={0.35}
          interactive={true}
          splashRadius={64}
          splashStrength={0.55}
          glow={0.2}
          intro={true}
          introDuration={1.8}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
