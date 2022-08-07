import React, { useState } from 'react'
import CreateTodoField from '../Home/create-todo-field/create-todo-filed'
import TodoItem from './item/TodoItem'




const data = [{
    id: '93753',
    title: 'Сходить в магазин',
    isCompleted: false,
    
},
{
    id: '35587',
    title: 'Помыть собаку',
    isCompleted: false,
},
{
    id: '57402',
    title: 'Сделать тестовое для infotecs ',
    isCompleted: false,
},

]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t.id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}
    const removeTodo = id => 
		setTodos([...todos].filter(t => t.id !== id))

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-3xl font-bold text-center mb-10'>To-do List</h1>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<CreateTodoField setTodos={setTodos} />
		</div>
	)
}
export default Home
