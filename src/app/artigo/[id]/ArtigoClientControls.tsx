'use client';

import { useState } from 'react';

export default function ArtigoClientControls({ artigoId }: { artigoId: number | string }) {
  const [curtido, setCurtido] = useState(false);

  return (
    <div>
      <button onClick={() => setCurtido((s) => !s)}>
        {curtido ? 'Descurtir' : 'Curtir'}
      </button>
    </div>
  );
}