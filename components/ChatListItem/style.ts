import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerFirst: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 12,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 13,
    paddingTop: 0,
  },
  row: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  midContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  lastMessage: {
    flex: 1,
    fontSize: 15,
    color: "grey",
    maxWidth: "90%",
  },
  time: {
    fontSize: 12,
    color: "grey",
  },
  divider: {
    marginTop: 13,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
});

export default styles;
