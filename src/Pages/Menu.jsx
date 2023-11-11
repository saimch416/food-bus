// import React from 'react'
// import Header from '../components/header'
// import Footer from '../components/footer'
// // import menu from "../assets/Menu.jpg"
// import { Img, Spacer,Box,Tabs,TabList,TabPanel,useMultiStyleConfig,useTab,Button,TabPanels, Flex } from '@chakra-ui/react'
// import MenuCard from '../components/menucard'
// function Menu() {
//   const CustomTab = React.forwardRef((props, ref) => {
//     // 1. Reuse the `useTab` hook
//     const tabProps = useTab({ ...props, ref })
//     const isSelected = !!tabProps['aria-selected']

//     // 2. Hook into the Tabs `size`, `variant`, props
//     const styles = useMultiStyleConfig('Tabs', tabProps)

//     return (
//       <Button __css={styles.tab} {...tabProps}>
//         <Box as='span' mr='2'>
//           {isSelected ? '😎' : '😐'}
//         </Box>
//         {tabProps.children}
//       </Button>
//     )
//   })

//   // const CustomTab = React.forwardRef((props, ref) => {

//   //   const tabProps = useTab({ ...props, ref })
//   //   const isSelected = !!tabProps['aria-selected']

//   //   const styles = useMultiStyleConfig('Tabs', tabProps)

//   //   return (
//   //     <Button __css={styles.tab} {...tabProps}>
//   //       <Box as='span' mr='2'>
//   //         {isSelected ? '😎' : '😐'}
//   //       </Box>
//   //       {tabProps.children}
//   //     </Button>
//   //   )
//   // })

//   return (
//    <>
//       <Header />
//       <Spacer h='100px'></Spacer>
//       <Box padding='0px 20vw'>
//         <MenuCard />
//       </Box>
//       <Footer />
//     </>

//   )
// }
// export default Menu
import React from 'react';
import Header from '../components/header';
import { Box, Spacer } from '@chakra-ui/react';

import Footer from '../components/footer';
import MenuCard from '../components/MenuCard';

function Menu() {
  return (
    <>
      <Header />
      <Spacer h="100px"></Spacer>
      <Box padding="0px 20vw">
        <MenuCard />
      </Box>
      <Spacer h="100px"></Spacer>
      <Footer />
    </>
  );
}
export default Menu;
