import { motion } from "motion/react";

/* Animated gradient orbs that float behind content */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large primary orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] dark:opacity-[0.06] bg-primary blur-[120px]"
        animate={{
          x: [0, 120, -80, 40, 0],
          y: [0, -100, 60, -40, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      />
      {/* Secondary accent orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] dark:opacity-[0.05] bg-accent blur-[100px]"
        animate={{
          x: [0, -100, 60, -30, 0],
          y: [0, 80, -60, 100, 0],
          scale: [1, 0.9, 1.15, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "50%", right: "10%" }}
      />
      {/* Small warm orb */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-[0.03] dark:opacity-[0.04] blur-[80px]"
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--accent))",
          bottom: "15%",
          left: "40%",
        }}
        animate={{
          x: [0, 60, -40, 80, 0],
          y: [0, -50, 30, -70, 0],
          scale: [1, 1.1, 0.85, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 0.5px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
    </div>
  );
}
