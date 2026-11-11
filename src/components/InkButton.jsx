import { useRef } from 'react';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function InkButton({ href, children, className = '', ...props }) {
  const drag = useRef(null);
  const suppressClick = useRef(false);

  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    drag.current = { x: event.clientX, y: event.clientY, moved: false };
    event.currentTarget.classList.add('is-pulling');
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!drag.current) return;
    const dy = Math.max(0, event.clientY - drag.current.y);
    const dx = clamp(event.clientX - drag.current.x, -16, 16);
    if (Math.hypot(event.clientX - drag.current.x, event.clientY - drag.current.y) > 5) {
      drag.current.moved = true;
    }
    const amount = clamp(dy / 74, 0, 1);
    event.currentTarget.style.setProperty('--ink-pull', `${Math.min(dy, 74)}px`);
    event.currentTarget.style.setProperty('--ink-shift', `${dx}px`);
    event.currentTarget.style.setProperty('--ink-amount', amount.toFixed(2));
    event.currentTarget.style.setProperty('--ink-tail-pull', `${Math.min(dy, 74) * 0.14}px`);
    event.currentTarget.style.setProperty('--ink-width', `${1 + amount * 0.55}`);
    event.currentTarget.style.setProperty('--ink-side-scale', `${0.35 + amount * 0.55}`);
    event.currentTarget.style.setProperty('--ink-drop-offset', `${dy * 0.92}px`);
    event.currentTarget.style.setProperty('--ink-drop-two-offset', `${5 + dy * 0.72}px`);
    event.currentTarget.style.setProperty('--ink-drop-scale', `${0.35 + amount * 0.7}`);
    event.currentTarget.style.setProperty('--ink-drop-two-scale', `${0.35 + amount * 0.55}`);
    event.currentTarget.style.setProperty('--ink-drop-x1', `${dx * 0.55}px`);
    event.currentTarget.style.setProperty('--ink-drop-x2', `${dx * 0.35}px`);
  };

  const onPointerUp = (event) => {
    if (!drag.current) return;
    suppressClick.current = drag.current.moved;
    drag.current = null;
    event.currentTarget.classList.remove('is-pulling');
    event.currentTarget.style.setProperty('--ink-pull', '0px');
    event.currentTarget.style.setProperty('--ink-shift', '0px');
    event.currentTarget.style.setProperty('--ink-amount', '0');
    event.currentTarget.style.setProperty('--ink-tail-pull', '0px');
    event.currentTarget.style.setProperty('--ink-width', '1');
    event.currentTarget.style.setProperty('--ink-side-scale', '.35');
    event.currentTarget.style.setProperty('--ink-drop-offset', '0px');
    event.currentTarget.style.setProperty('--ink-drop-two-offset', '5px');
    event.currentTarget.style.setProperty('--ink-drop-scale', '.35');
    event.currentTarget.style.setProperty('--ink-drop-two-scale', '.35');
    event.currentTarget.style.setProperty('--ink-drop-x1', '0px');
    event.currentTarget.style.setProperty('--ink-drop-x2', '0px');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const onPointerCancel = (event) => {
    suppressClick.current = false;
    onPointerUp(event);
  };

  const onClick = (event) => {
    if (!suppressClick.current) return;
    event.preventDefault();
    suppressClick.current = false;
  };

  return (
    <a
      className={`ink-button ${className}`.trim()}
      href={href}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onClick={onClick}
      {...props}
    >
      <span className="ink-tail" aria-hidden="true" />
      <span className="ink-drop ink-drop-one" aria-hidden="true" />
      <span className="ink-drop ink-drop-two" aria-hidden="true" />
      <span className="ink-button-content">{children}</span>
    </a>
  );
}
