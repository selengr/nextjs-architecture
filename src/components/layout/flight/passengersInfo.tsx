import PassengersForm from './passengersForm';
import TabPanel from '@mui/joy/TabPanel/TabPanel';
import PassengersForm_Passport from './PassengersForm_Passport';
import UICustomizedTabs from '@/components/UI/ui-tabs/UICustomizedTabs';

const PassengersInfo = ({ onClose, ageHood, id, edit }: any) => {
  return (
    <div className="overflow-y-scroll">
      <div className="w-full flex justify-center align-middle items-center pt-6 mt-[24px] mb-[24px] bg-ms-back-card-gray-12 rounded-2xl">
        <UICustomizedTabs tabsName={{ first: 'کارت ملی', second: 'پاسپورت' }}>
          <TabPanel
            value={0}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: '0 0',
              flexDirection: 'column'
            }}
          >
            <PassengersForm
              onClose={onClose}
              ageHood={ageHood}
              id={id}
              edit={edit}
            />
          </TabPanel>

          <TabPanel
            value={1}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: '0 0',
              flexDirection: 'column'
            }}
          >
            <PassengersForm_Passport
              onClose={onClose}
              ageHood={ageHood}
              id={id}
              edit={edit}
            />
          </TabPanel>
        </UICustomizedTabs>
      </div>
    </div>
  );
};

export default PassengersInfo;
