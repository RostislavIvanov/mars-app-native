import React, {useState} from 'react';
import {Platform, Text, View} from "react-native";
import {AutocompleteDropdown} from "react-native-autocomplete-dropdown";

const DropDown = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <View>
            <AutocompleteDropdown
                clearOnFocus={true}
                closeOnBlur={true}
                showClear={false}
                direction={Platform.select({ios: 'up'})}
                initialValue={{id: '1'}}
                onSelectItem={setSelectedItem}
                dataSet={[
                    {id: '1', title: 'Alpha'},
                    {id: '2', title: 'Beta'},
                    {id: '3', title: 'Gamma'}
                ]}
                ItemSeparatorComponent={<View style={{height: 1, width: '100%', backgroundColor: '#d8e1e6'}}/>}
                getItemLayout={(data, index) => ({length: 50, offset: 50 * index, index})}
                textInputProps={{
                    autoCorrect: false,
                    autoCapitalize: 'none',
                    style: {
                        fontSize: 18,
                        borderRadius: 10,
                        backgroundColor: '#EEE7DF',
                        color: '#000',
                        paddingLeft: 16,
                    },
                }}
                inputContainerStyle={{
                    marginRight: 24,
                    marginLeft: 24,
                    backgroundColor: '#EEE7DF',
                    borderRadius: 10,
                }}
                suggestionsListContainerStyle={{
                    backgroundColor: '#EEE7DF',
                    borderRadius: 10,
                }}
                containerStyle={{flexGrow: 1, flexShrink: 1}}
                renderItem={(item, text) => <Text style={{color: '#000', padding: 15}}>{item.title}</Text>}
                inputHeight={60}
            />
        </View>
    );
};

export default DropDown;