import React from 'react';
import menu1 from '../assets/menu.jpg';
import { Img } from '@chakra-ui/react';
// function Menu() {
//   return (
//     <>
//     <Header/>
//     <Spacer h="75px" ></Spacer>

//     <Img w="100vw"  src={menu} alt="" />

//     <Footer/>
//     </>
//   )
// }

// export default Menu

function MenuCard() {
  // const CustomTab = React.forwardRef((props, ref) => {

  //   const tabProps = useTab({ ...props, ref })
  //   const isSelected = !!tabProps['aria-selected']

  //   const styles = useMultiStyleConfig('Tabs', tabProps)

  //   return (
  //     <Button __css={styles.tab} {...tabProps}>
  //       <Box as='span' mr='2'>
  //         {isSelected ? '😎' : '😐'}
  //       </Box>
  //       {tabProps.children}
  //     </Button>
  //   )
  // })

  return <Img w="100%" src={menu1} />;
}
export default MenuCard;
