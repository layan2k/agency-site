import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 10%;
  background-color: crimson;
  color: white;

`
const Wrapper = styled.div`
  display  :flex ;
  justify-content: space-between;
  padding-top: 20px;
  @media only screen and (max-width:480px){
        padding: 10px;
    }
`
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`
const ListItem = styled.li`
  margin-right: 20px;
  @media only screen and (max-width:480px){
        margin-right: 10px;
        font-size: 14px;
    }
`
const Copyright = styled.span`
  padding-right: 15px;
  @media only screen and (max-width:480px){
        font-size:14px;
    }
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Lama Dev/lesliethedev © 2022</Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer