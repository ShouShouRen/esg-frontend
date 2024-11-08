const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-dark text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-secondary mb-4">Opps! 找不到這個頁面</p>
        <a href="/" className="text-primary underline hover:text-secondary">
          回到首頁
        </a>
      </div>
    </div>
  );
};

export default NotFound;
