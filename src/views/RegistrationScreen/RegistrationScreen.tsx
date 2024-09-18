import { View,Text } from "react-native";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./styles"

export default function RegistrationScreen(){
    return (
        <View>
            <Text style={styles.title}>Create your account</Text>
            <RegistrationForm />
        </View>
    )
}