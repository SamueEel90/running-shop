const Footer: React.FC = () => {
  return (
    <div className="bg-dark-gray text-white py-4 h-50">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2025 Running Shop. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-2">
          <li><a href="#" className="text-white-smoke">Privacy Policy</a></li>
          <li><a href="#" className="text-white-smoke">Terms of Service</a></li>
          <li><a href="#" className="text-white-smoke">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;