import styled from 'styled-components'
import TodoItem from '../UI/TodoItem'
import ErrorBox from '../UI/ErrorBox'
import { NavLink } from 'react-router-dom';
const activeClassName = "nav-item-active";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 3.2rem 0;
`

export const TodoContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  max-width: 600px;
  min-width: 360px;
`

export const Title = styled.h1`
  color: var(--text-color);
  margin-bottom: 3.2rem;
  text-align: center;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

export const Input = styled.input`
  margin: 8px 0;
  width: calc(50% - 8px);
  padding: 1.6rem;
  border: none;
  background: rgba(0,0,0,0.1);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  transition: all .2s ease-in-out;
  outline: none;

`

export const AddButton = styled.button`
  padding: 1.6rem 2.4rem;
  background: var(--accent-color);
  transition: background .2s ease-in-out;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 0.8rem 0 3.2rem 0;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.8rem;
  color:#fff;
  &:hover, &:active{
    background: var(--accent-color-active);
  }
`

export const TodoListContainer = styled.div`
  background: var(--list-container-background);
  padding: 3.2rem;
  margin-top:30px;
  border-radius: 5px;
  width: 100%;
`

export const EmptyListMessage = styled.div`
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
`

export const TaskItem = styled(TodoItem)`
  margin-bottom: 8px;
`

export const Error = styled(ErrorBox)`
  margin-bottom: 1.6rem;
`

export const StyledLink = styled(NavLink).attrs({
  activeClassName
})(props => ({
  textDecoration:"none",
  fontWeight:"bold",
  fontSize:"1.8rem",
  padding:"20px",
  color:"#000",
  borderRadius:"15px",
  ["&." + props.activeClassName]: {
    backgroundColor: "var(--accent-color)",
    color:"#fff"
  }
}));