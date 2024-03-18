import { mockTreeData } from "./_mock"


async function getTreeData() {
    // const res = await fetch('https://api.example.com/...')
   
    // if (!res.ok) {
    //   throw new Error('Failed to fetch data')
    // }
   
    // return res.json()
    return mockTreeData
  }

  export default getTreeData