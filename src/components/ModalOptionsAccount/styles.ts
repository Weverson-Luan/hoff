import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000",
  },
  content_list: {
    maxWidth: 400,
    height: 140,
    backgroundColor: "#1E1E24",
  },
  content_desc: {
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,

  },
  text_title: {
    fontSize: 14,
    color: "#fff",
    fontWeight: '700',
    marginLeft: 10,
    marginTop: -2
  },
  text: {
    color: "#9999A4",
    fontSize: 10,
    marginLeft: 16,
 
  }
})