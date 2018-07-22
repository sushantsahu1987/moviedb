import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from '../src/components/Container';
import Row from '../src/components/Row';
import Column from '../src/components/Column';


storiesOf('Layout', module)
    .add('Container',()=> (<Container> Hello Container </Container>))
    .add('Row',()=> (
        <Container>
            <Row> 
                Hello Row
            </Row>
        </Container>
        ))
    .add('Column', () => (
        <Container>
            <Row> 
                <Column>Hello Column 1</Column>
                <Column>Hello Column 2</Column>
            </Row>
        </Container>))
    .add('Column type=sm size=4,4,4', () => (
        <Container>
            <Row> 
                <Column type='sm' size='4' >Hello Column 1</Column>
                <Column type='sm' size='4' >Hello Column 2</Column>
                <Column type='sm' size='4' >Hello Column 3</Column>
            </Row>
        </Container>))
    .add('Column type=lg size=2,8,2', () => (
        <Container>
            <Row> 
                <Column type='lg' size='2' >Hello Column 1</Column>
                <Column type='lg' size='8' >Hello Column 2</Column>
                <Column type='lg' size='2' >Hello Column 3</Column>
            </Row>
        </Container>));
