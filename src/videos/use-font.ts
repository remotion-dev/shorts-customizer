import { useEffect, useState } from 'react';
import { continueRender, delayRender } from 'remotion';

export const useFont = () => {
  const [waitForFont] = useState(() => delayRender());

  useEffect(() => {
    const font = new FontFace(
      'YB',
      `url(https://jonnyburger.s3.eu-central-1.amazonaws.com/big_noodle_titling.ttf)`
    ).load();
    font.then(async () => {
      document.fonts.add(await font);
      continueRender(waitForFont);
    });
  }, [waitForFont]);
};
