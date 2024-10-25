const SpinAnimation = ({ children }: ChildrenProps) => {
  return (
    <div className="relative p-[1.5px] overflow-hidden rounded-[1.7rem]">
      <div className="absolute bg-gradient-to-b from-[#ff095b]/90 via-[#EB8317]/60 to-[#F3C623]/30 -z-10 h-24 w-[500px] -left-2/3 top-1/3 spin-slow" />
      {children}
    </div>
  );
};

export default SpinAnimation;
