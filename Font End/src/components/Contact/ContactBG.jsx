function ContactBG({ children }) {
  return (
    <div
      className="
        min-h-[100svh]
        bg-gradient-to-br 
        from-[#00010a] via-[#001a2d] to-black
        text-white 
        flex flex-col
        relative
        overflow-hidden
      "
    >
      {/* subtle sci-fi glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.12),transparent_60%)]
          opacity-50
        "
      />
      {children}
    </div>
  );
}

export default ContactBG;
