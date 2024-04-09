import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../../themes";
import { colors } from "../../themes/colors";
import CHeader from "../common/CHeader";
import CText from "../common/CText";
import { CommonString } from "../../i18n/String";
import images from "../../assets/images/index";
import { moderateScale } from "../../common/constants";
import Entypo from "react-native-vector-icons/Entypo";
import CButton from "../common/CButton";
import { StackNav } from "../../navigation/NavigationKeys";

export const CommonFeature = ({ extraview1, extraview2, premmium }) => {
  return (
    <View style={[localStyles.mainfeatureview, extraview1]}>
      <View style={[localStyles.featureview, extraview2]}>
        {!!premmium && (
          <CText type={"C22"} color={colors.fonttile}>
            {CommonString.premiumfeature}
          </CText>
        )}
        <PremiumFeature name={CommonString.scanreal} />
        <PremiumFeature name={CommonString.unlimitedFav} />
        <PremiumFeature name={CommonString.unlimitedsearch} />
      </View>
    </View>
  );
};
const PremiumFeature = ({ name }) => {
  return (
    <View style={localStyles.features}>
      <Entypo name="check" />
      <CText type={"E17"} color={colors.fontbody}>
        {name}
      </CText>
    </View>
  );
};

const Subscription = ({ navigation }) => {
  const onPressbuy = () => {
    navigation.navigate(StackNav.BuyPremium);
  };

  return (
    <View style={localStyles.main}>
      <CHeader
        title={CommonString.subscription}
        LeftIcon={true}
        type={"E15"}
        color={colors.fonttile}
      />
      <View style={localStyles.innerview}>
        <View>
          <Image source={images.profileimg} style={localStyles.imagesty} />
          <CText type={"C28"} color={colors.fonttile} align={"center"}>
            {CommonString.username}
          </CText>
          <CText type={"E17"} color={colors.fonttile} align={"center"}>
            {CommonString.notsubscribed}
          </CText>
        </View>
        <CommonFeature premmium={true} />
        <View style={localStyles.btnview}>
          <CButton name={CommonString.buypremium} onPress={onPressbuy} />
          <TouchableOpacity>
            <CText type={"K17"} color={colors.green} align={"center"}>
              {CommonString.restorepurchase}
            </CText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Subscription;

const localStyles = StyleSheet.create({
  main: {
    ...styles.flex,
    backgroundColor: colors.white,
  },
  innerview: {
    ...styles.mh15,
    ...styles.justifyEvenly,
    ...styles.flex,
  },
  imagesty: {
    height: moderateScale(144),
    width: moderateScale(144),
    resizeMode: "contain",
    ...styles.selfCenter,
  },
  featureview: {
    backgroundColor: colors.btncolor,
    gap: moderateScale(10),
    padding: moderateScale(50),
    borderRadius: moderateScale(20),
  },
  features: {
    ...styles.flexcenterrow,
    gap: moderateScale(7),
  },
  mainfeatureview: {
    ...styles.selfCenter,
  },
  btnview: {
    gap: moderateScale(20),
  },
});
