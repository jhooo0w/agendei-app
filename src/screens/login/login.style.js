import { Colors } from "react-native/Libraries/NewAppScreen";
import {COLORS, FONT_SIZE} from "../../constants/theme.js";


export const styles = {
    container:{
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between",
    },

    containerLogo:{
        alignItems: "center",
    
    },
    logo: {
        width: 120,
        height: 23,
    },

    containerInput:{
        marginBottom: 15,
    },

    input: {
        backgroundColor: COLORS.gray5,
        padding: 15,
        borderRadius: 6,
    },

    footer:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    footerLink:{
        color: COLORS.blue,
    }
}