import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000",
  },
  content_list: {
    width: 700,
    height: 350,
    backgroundColor: "#1E1E24",
    padding: 14,

    alignItems: "center",
 
  },
  content_desc: {
    width: 160,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,

  },
  text_title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: '700',
    marginBottom: 12
  },
  text: {
    fontSize: 16,
    color: "#fff",
 
  },
  buttonWatch: {
    marginLeft: 16,
 
  }
})


export const WrapperInput = styled.View`
  margin-bottom: 15px;
`;
export const Input = styled.TextInput`
  width: 350px;
  height: 200px;
  border-width: 1px;
  border-color: ${({theme})=> theme.colors.brand_gray_100};
  border-radius: 2px;
  padding-left: ${RFValue(16)}px;
  margin-bottom: 12px;
  color: #fff;
  flex-wrap: wrap;
  font-size: 16px;
`;