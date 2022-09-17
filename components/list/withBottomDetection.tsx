import React, { useEffect, useRef } from 'react';

export function withBottomDetection<P>(Component: React.ComponentType<P>) {
  return function Wrapper(props: P & { onNearBottom?: () => void }) {
    const ref = useRef<HTMLDivElement>(null);
    const nearBottomCallbackRef = useRef<() => void>(null);

    useEffect(() => {
      if (ref.current) {
        const intersectionObserver = new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
              nearBottomCallbackRef.current?.();
            }
          },
          { rootMargin: '100%', threshold: [1] }
        );

        intersectionObserver.observe(ref.current);

        return () => intersectionObserver.disconnect();
      }
    }, []);

    nearBottomCallbackRef.current = props.onNearBottom;

    return (
      <React.Fragment>
        <Component {...props} />
        <div ref={ref}></div>
      </React.Fragment>
    );
  };
}
