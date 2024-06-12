import React from 'react'

const UserItem = () => {
	return (
		<div className='flex items-center justify-between  gap-2 border rounded-[8px] p-2'>
			<div className='avatar rounded-full h-10 w-10 bg-emerald-500 text-white font-bold flex items-center justify-center'>
				<p>KO</p>
			</div>
			<div className='grow'>
				<p className='text-[16px] font-bold'>Kelvin Ochubili</p>
				<p className='text-xs text-neutral-500'>Kay@gmail.com</p>
			</div>
		</div>
	)
}

export default UserItem
