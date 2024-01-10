import React from 'react';
import { ScrollView, View, Text,StyleSheet ,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('screen')
const UserProfile: React.FC = () => {
    return (
        <ScrollView>
            <View style={styles.UsersProfile}>
                <Text>ggggghgg</Text>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    UsersProfile: {
   backgroundColor:"white",
       
       
    },})
export default UserProfile;

