// "use client"

import AddIcon from '@mui/icons-material/Add';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { RichControlledTreeView } from '@/components/common/richControlledTreeView';
import getTreeData from '@/components/common/richControlledTreeView/getTreeData';


export const dynamic = 'force-dynamic';


export default async function Page() {
  const data = await getTreeData();
  return (
    <div>
      <RichControlledTreeView
        treeDataProps={data}
        checkable={true}
        //    switcherIcon={<AddIcon />}
        //    icon={<AddLocationAltIcon />}
        // defaultExpandedKeys={['0-0']}
      />
    </div>
  );
}

