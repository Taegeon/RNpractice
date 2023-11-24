import { func } from 'prop-types';
import React, { useState } from 'react';
import { StatusBar , Dimensions} from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import Input from './components/input';
import { theme } from './theme';
import { images } from './images';
import IconButton from './components/iconbutton';
import Task from './components/task';

//safeareaview is for iphone notch
const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.main};
    align-self: flex-start;
    margin: 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
    const width = Dimensions.get('window').width;
    const [newTask, setNewTask] = useState('');
    const _addTask = () => {
        alert(`ADDED : ${newTask}`)
        setNewTask('');
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar barStyle="light-content" backgroundColor={theme.background}/>
                <Title>Welcome to my todolist</Title>
                <Input placeholder="you can add task" value={newTask} onChangeText={_handleTextChange} onSubmitEditing={_addTask}/>
                <List width={width}>
                    <Task text="sample 1"/>
                    <Task text="sample 2"/>
                    <Task text="sample 3"/>
                    <Task text="sample 4"/>
                </List>

                {/* <IconButton type={images.emptyIcon} />
                <IconButton type={images.checkIcon} />
                <IconButton type={images.deleteIcon} />
                <IconButton type={images.editIcon} /> */}
                
            </Container>
        </ThemeProvider>
    );
}
