import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import cn from 'classnames'

const Check = ({ isCompleted }) => {
	return (
		<div
			className={cn(
				'border-2 rounded-lg border-pink-400 w-6 h-6 mr-3 flex items-center justify-center',
				{
					'bg-pink-400': isCompleted,
				} 
			)}
		>
			{isCompleted && <GiCheckMark size={24} className='text-gray-900' />}
		</div>
	)
}

export default Check
