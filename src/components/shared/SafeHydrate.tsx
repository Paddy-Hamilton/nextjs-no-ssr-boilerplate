const SafeHydrate = ({ children }) => {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
};

export default SafeHydrate;
