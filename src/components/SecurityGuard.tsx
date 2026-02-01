import { useEffect } from 'react';

export default function SecurityGuard() {
  useEffect(() => {
    /* ── 우클릭 방지 ── */
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    /* ── 개발자 도구 단축키 차단 ── */
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+I (개발자 도구)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+J (콘솔)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+C (요소 선택)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return;
      }
      // Ctrl+U (소스 보기)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return;
      }
      // Ctrl+U (대문자)
      if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
        return;
      }
      // Ctrl+S (저장)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return;
      }
      // Ctrl+S (대문자)
      if (e.ctrlKey && e.key === 'S') {
        e.preventDefault();
        return;
      }
    };

    /* ── 드래그 방지 ── */
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    /* ── 선택 방지 ── */
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return null;
}
