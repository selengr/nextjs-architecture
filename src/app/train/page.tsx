import TransportTypeSelector from "@/components/UI/ui-transport-type-selector/TransportTypeSelector";
import MobileBottomNavigation from "@/components/common/menu/MobileBottomNavigation";


const Train = () => {
  return (
    <div className="h-full w-full overflow-hidden">
        
        <TransportTypeSelector type="train"/>
        <div className="relative flex align-middle items-center">
        <MobileBottomNavigation />
      </div>
    </div>
  );
};

export default Train;
