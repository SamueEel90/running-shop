const Logo:React.FC = () => {
  return (
    <div className="flex items-center ">
      <img
        src="/images/logobw.png"
        alt="Logo"
        className="h-32 w-32 object-cover"
      />
      <span className="text-3xl font-bold text-caribean-light">Mythic Miles</span>
    </div> 
  );
}

export default Logo;