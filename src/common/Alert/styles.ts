import { StyleSheet } from "react-native";

//colors
import theme from "../../styles/colors/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.brandy_black,
  },
  contentTitle: {
    width: '100%',
    height: 50,
    borderColor: theme.colors.brand_gray_200,
    borderBottomWidth: 1,
    paddingHorizontal: 12,
  },
  content_list: {
    width: 400,
    height: 140,
    backgroundColor: theme.colors.brand_secondary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content_desc: {
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  text_title: {
    fontSize: 14,
    color: theme.colors.brand_white,
    fontWeight: '700',
    marginTop: 18
  },
  text: {
    marginTop: 5,
    color: theme.colors.brand_white,
    fontSize: 14,
    textAlign: 'center'
  },
  wrapperButton: {
    padding: 8,
    marginTop: 36,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:  'flex-end'
  },
  textButton: {
    color: theme.colors.brand_white,
    fontSize: 14,
    textAlign: 'center'
  },
});