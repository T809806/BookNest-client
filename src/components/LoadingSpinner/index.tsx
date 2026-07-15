const LoadingSpinner = () => {

  return (
    
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-700"></div>
    </div>
  );
};

export default LoadingSpinner;