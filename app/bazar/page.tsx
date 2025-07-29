import BazarFormRedirect from "./components/BazarFormRedirect";
import BazarPresentation from "./components/BazarPresentation";

const BazarPage = () => {
  return (
    <div className="container mx-auto p-4">
      <BazarPresentation />
      <BazarFormRedirect />
    </div>
  );
};

export default BazarPage;
