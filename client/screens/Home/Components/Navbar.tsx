import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import location from "../../../assets/location.png";
import Home from "../../../assets/home.png";
import message from "../../../assets/message.png";
import user from "../../../assets/user.png";
import vetr from "../Components/vetrinaire"
import Svg, { Path, G, Text } from 'react-native-svg';

const { width, height } = Dimensions.get('screen');

const Navbar: React.FC = (): React.ReactElement => {
    return (
        <View style={styles.navbar}>
          <Svg width={60} height={45} viewBox="0 0 24 24" fill="none" >
        <Path
        //   fillRule="evenodd"
        //   clipRule="evenodd"
          d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z"
          fill="white"
        />
      </Svg>
      <Svg width={60} height={50} viewBox="0 0 24 24" fill="none" stroke="white">
        <Path
          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
        //   stroke="white"
        //   strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
        //   stroke="white"
        //   strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
   
      <Svg width={60} height={40} viewBox="0 0 24 24" fill="none" stroke="white">
        <Path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
          stroke="white"
        //   strokeWidth={1.5}
        />
      </Svg>
      <Svg width={60} height={50} viewBox="0 0 24 24" fill="none" >
        <Path
          d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
          fill="white"
        />
      </Svg>

        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#ffc368",
        flexDirection: 'row',
        width: width,
        height: height * 0.07,
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: 'white', 
        borderWidth: 2, 
        gap:15
    },
   
});

export default Navbar;
