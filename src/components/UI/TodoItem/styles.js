import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 1.6rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: all .2s ease-in-out;
  background:#FFF;
  &:hover{
    border: 1px solid rgba(255,255,255,0.2);
  }
`

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: none;
  outline: none;
`

export const Content = styled.div`
  flex: 1;
  margin-left: 1.6rem;
  margin-right: 1.4rem;
  overflow: hidden;
`

export const UserName = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Task = styled.div``

export const RemoveButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  cursor: pointer;
  font-weight: bold;
  background: rgba(255,255,255,0.1);
  border-bottom-left-radius: 5px;

  &:hover{
    color: var(--accent-color);
  }
`

export const ContentAction =  styled.div`
display: flex;
flex: 1;
justify-content: space-around;
align-items: center;
margin-right: 1.4rem;
`

export const ContentButton = styled.button`
background: ${({bg})=> bg || '#000'};
appearance: none;
-webkit-appearance: none;
cursor: pointer;
padding: 8px;
border-radius: 5px;
color: #ffffff;
-webkit-transition: background-color 100ms linear;
-ms-transition: background-color 100ms linear;
 transition: background-color 100ms linear;
`
