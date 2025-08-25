const Logo:React.FC = () => {
  return (
    <a className="flex items-center  " href="/">
      <img
        src="/images/logobw.png"
        alt="Logo"
        className="h-16 w-16 object-cover"
      />
      <span className="text-3xl font-bold md:text-caribean-light text-white">Mythic Miles</span>
    </a> 
  );
}

export default Logo;